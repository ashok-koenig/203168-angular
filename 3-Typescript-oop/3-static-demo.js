var Bank = /** @class */ (function () {
    // Contructor of the class
    function Bank(_accountName, _accountBalance) {
        Bank.lastAccountNumber++;
        this.accountNumber = Bank.lastAccountNumber;
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
    // Static method
    Bank.getLastAccontNumber = function () {
        console.log("Last Account number allocated: ".concat(Bank.lastAccountNumber));
    };
    Bank.lastAccountNumber = 100;
    return Bank;
}());
var acc1 = new Bank('John Peter', 1000);
acc1.displayBalance();
var acc2 = new Bank('John Doe', 2000);
acc2.displayBalance();
Bank.getLastAccontNumber();
