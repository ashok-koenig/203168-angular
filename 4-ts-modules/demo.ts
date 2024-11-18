// import { greet, message } from "./1-welcome";
// import Calculator from "./2-calculator";

// console.log(message)
// greet("John")

// var obj = new Calculator(10,20)
// console.log(obj.sum());

import * as welcome from "./1-welcome";
import  Calculator  from "./2-calculator";

import { MyNS } from "./3-MyNS";
MyNS.greet('John')
console.log(MyNS.message);

var calc = new MyNS.Calculator(10, 20)
console.log(`Sum is ${calc.sum()}`);
welcome.greet('John')
console.log(welcome.message);


// var calc = new Calculator(10, 20)
// console.log(`Sum is ${calc.sum()}`);

