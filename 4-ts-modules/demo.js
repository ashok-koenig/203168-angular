"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1_welcome_1 = require("./1-welcome");
var _2_calculator_1 = require("./2-calculator");
console.log(_1_welcome_1.message);
(0, _1_welcome_1.greet)("John");
var obj = new _2_calculator_1.default(10, 20);
console.log(obj.sum());
// import * as welcome from "./1-welcome";
// import  Calculator  from "./2-calculator";
// import { MyNS } from "./3-MyNS";
// MyNS.greet('John')
// console.log(MyNS.message);
// var calc = new MyNS.Calculator(10, 20)
// console.log(`Sum is ${calc.sum()}`);
// welcome.greet('John')
// console.log(welcome.message);
// var calc = new Calculator(10, 20)
// console.log(`Sum is ${calc.sum()}`);
