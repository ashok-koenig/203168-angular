var Bank = /** @class */ (function () {
    // Contructor of the class
    function Bank(accountNumber, accountName, accountBalance) {
        this.accountNumber = accountNumber;
        this.accountName = accountName;
        this.accountBalance = accountBalance;
    }
    // Methods of the class
    Bank.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.accountBalance += amount;
            console.log('Deposit successful');
        }
        else {
            console.log('Invalid amount');
        }
    };
    Bank.prototype.withdraw = function (amount) {
        if (this.accountBalance >= amount) {
            this.accountBalance -= amount;
            console.log('Withdrawal successful');
        }
        else {
            console.log('Insufficiant balance');
        }
    };
    Bank.prototype.displayBalance = function () {
        console.log("".concat(this.accountName, "-").concat(this.accountNumber, " balance is ").concat(this.accountBalance));
    };
    return Bank;
}());
var obj = new Bank(101, 'John Peter', 1000);
obj.displayBalance();
// obj.accountBalance=27387387
obj.deposit(100);
obj.displayBalance();
obj.withdraw(500);
obj.displayBalance();
