function validateLogin(username, password){
    return new Promise((resolve, reject)=>{
        console.log("Validating Login....");
        setTimeout(()=>{
            if(username='user1' && password == 'pwd123'){
                resolve('Login successful')
            }else{
                reject('Invalid username or password')
            }
        }, 2000)
    })
}

// Call the validate Login function - then/catch
// validateLogin('user1', 'pwd12').then((response)=>console.log(response)).catch((error)=> console.log(error))
// Call the validate Login function - async / await

async function login(username, password){
    try {
        const response = await validateLogin(username, password)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
login('user1', 'pwd12')