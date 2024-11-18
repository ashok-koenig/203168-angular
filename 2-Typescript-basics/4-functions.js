function calculate(price, quantity, discount) {
    if (quantity === void 0) { quantity = 1; }
    if (discount === void 0) { discount = 0; }
    return (price * quantity) - discount;
}
console.log(calculate(10, 5, 3));
var greet = function (name) {
    console.log("Welcome ".concat(name));
};
greet('John');
