"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
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
exports.Calculator = Calculator;
