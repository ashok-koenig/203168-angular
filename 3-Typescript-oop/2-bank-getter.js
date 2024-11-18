var Bank = /** @class */ (function () {
    // Contructor of the class
    function Bank(accountNumber, _accountName, _accountBalance) {
        this.accountNumber = accountNumber;
        this._accountName = _accountName;
        this._accountBalance = _accountBalance;
    }
    Object.defineProperty(Bank.prototype, "accountBalance", {
        // Methods of the class
        get: function () {
            return this._accountBalance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bank.prototype, "accountName", {
        get: function () {
            return this._accountName;
        },
        set: function (name) {
            this._accountName = name;
        },
        enumerable: false,
        configurable: true
    });
    Bank.prototype.deposit = function (amount) {
        if (amount > 0) {
            this._accountBalance += amount;
            console.log('Deposit successful');
        }
        else {
            console.log('Invalid amount');
        }
    };
    Bank.prototype.withdraw = function (amount) {
        if (this._accountBalance >= amount) {
            this._accountBalance -= amount;
            console.log('Withdrawal successful');
        }
        else {
            console.log('Insufficiant balance');
        }
    };
    Bank.prototype.displayBalance = function () {
        console.log("".concat(this._accountName, "-").concat(this.accountNumber, " balance is ").concat(this._accountBalance));
    };
    return Bank;
}());
var obj = new Bank(101, 'John Peter', 1000);
obj.displayBalance();
console.log("Balance using Getter: ", obj.accountBalance);
obj.accountName = "John Doe";
obj.deposit(100);
obj.displayBalance();
obj.withdraw(500);
obj.displayBalance();
console.log("Name using Getter: ", obj.accountName);
