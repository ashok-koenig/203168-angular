class Bank{
    // Properties of the class
    accountNumber;
    accountBalance;
    // Contructor of the class
    constructor(accountNumber, accountBalance){
        this.accountNumber = accountNumber
        this.accountBalance = accountBalance
    }
    // Method of the class
    displayBalance(){
        console.log(`${this.accountNumber} balance is ${this.accountBalance}`);        
    }
}
const obj = new Bank(101, 1000)
obj.displayBalance()