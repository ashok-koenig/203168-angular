var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.introduce = function () {
        console.log("I'm ".concat(this.firstName, " ").concat(this.lastName, " and ").concat(this.age, " years old"));
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstName, lastName, age, grade) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.grade = grade;
        return _this;
    }
    Student.prototype.introduce = function () {
        _super.prototype.introduce.call(this);
        console.log("Studying ".concat(this.grade, " grade"));
    };
    return Student;
}(Person));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(firstName, lastName, age, subject) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.subject = subject;
        return _this;
    }
    Teacher.prototype.introduce = function () {
        _super.prototype.introduce.call(this);
        console.log("Handling ".concat(this.subject, " subject"));
    };
    return Teacher;
}(Person));
var john = new Student('John', 'Peter', 13, 7);
john.introduce();
var smith = new Teacher('John', 'Smith', 30, 'Maths');
smith.introduce();
