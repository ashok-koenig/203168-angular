"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1_welcome_1 = require("./1-welcome");
var _2_calculator_1 = require("./2-calculator");
(0, _1_welcome_1.greet)('John');
console.log(_1_welcome_1.message);
var calc = new _2_calculator_1.Calculator(10, 20);
console.log("Sum is ".concat(calc.sum()));
