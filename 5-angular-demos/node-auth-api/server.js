const express = require('express');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;
const SECRET_KEY = 'your-secret-key';

const USERS_FILE = path.join(__dirname, 'data/users.json');
const BLOGS_FILE = path.join(__dirname, 'data/blogs.json');

app.use(bodyParser.json());
app.use(cors());

/** Utility functions */
const readData = (filePath) => JSON.parse(fs.readFileSync(filePath, 'utf-8') || '[]');
const writeData = (filePath, data) => fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');

/** Authentication Middleware */
const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Token required' });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = user;
    next();
  });
};

/** Role Authorization Middleware */
const authorizeRole = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: 'Forbidden' });
  }
  next();
};

/** Signup Endpoint */
app.post('/signup', (req, res) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password || !role) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const users = readData(USERS_FILE);
  if (users.some((user) => user.email === email)) {
    return res.status(409).json({ message: 'Email already exists' });
  }

  const hashedPassword = bcrypt.hashSync(password, 8);
  const newUser = { id: Date.now(), name, email, password: hashedPassword, role };
  users.push(newUser);
  writeData(USERS_FILE, users);

  res.status(201).json({ message: 'User created successfully' });
});

/** Login Endpoint */
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const users = readData(USERS_FILE);
  const user = users.find((u) => u.email === email);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token, role: user.role });
});

/** Get All Blogs (Public) */
app.get('/blogs', (req, res) => {
  const blogs = readData(BLOGS_FILE);
  res.json(blogs);
});

/** Create a Blog (Admin Only) */
app.post('/blogs', authenticateJWT, authorizeRole(['admin']), (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  const blogs = readData(BLOGS_FILE);
  const newBlog = { id: Date.now(), title, content, author: req.user.id };
  blogs.push(newBlog);
  writeData(BLOGS_FILE, blogs);

  res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
});

/** Update a Blog (Admin Only) */
app.get('/blogs/:id', authenticateJWT, authorizeRole(['admin']), (req, res) => {
  const { id } = req.params;  
  const blogs = readData(BLOGS_FILE);
  const blogIndex = blogs.findIndex((b) => b.id === parseInt(id));

  if (blogIndex === -1) {
    return res.status(404).json({ message: 'Blog not found' });
  }

  res.json({...blogs[blogIndex] });
});

/** Get a Blog (Admin Only) */
app.put('/blogs/:id', authenticateJWT, authorizeRole(['admin']), (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const blogs = readData(BLOGS_FILE);
  const blogIndex = blogs.findIndex((b) => b.id === parseInt(id));

  if (blogIndex === -1) {
    return res.status(404).json({ message: 'Blog not found' });
  }

  blogs[blogIndex] = { ...blogs[blogIndex], title, content };
  writeData(BLOGS_FILE, blogs);

  res.json({ message: 'Blog updated successfully', blog: blogs[blogIndex] });
});

/** Delete a Blog (Admin Only) */
app.delete('/blogs/:id', authenticateJWT, authorizeRole(['admin']), (req, res) => {
  const { id } = req.params;
  const blogs = readData(BLOGS_FILE);
  const updatedBlogs = blogs.filter((b) => b.id !== parseInt(id));

  if (blogs.length === updatedBlogs.length) {
    return res.status(404).json({ message: 'Blog not found' });
  }

  writeData(BLOGS_FILE, updatedBlogs);
  res.json({ message: 'Blog deleted successfully' });
});

/** Start the Server */
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
