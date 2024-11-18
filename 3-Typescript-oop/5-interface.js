var Calculator = /** @class */ (function () {
    function Calculator(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    Calculator.prototype.sum = function () {
        return this.num1 + this.num2;
    };
    return Calculator;
}());
var calc = new Calculator(10, 20);
console.log("Sum is ".concat(calc.sum()));
