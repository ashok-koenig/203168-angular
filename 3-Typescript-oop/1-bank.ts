class Bank{
    // Properties of the class
    private accountNumber:number;
    private accountName: string;
    private accountBalance:number;
    // Contructor of the class
    constructor(accountNumber:number,accountName: string, accountBalance:number){
        this.accountNumber = accountNumber
        this.accountName= accountName
        this.accountBalance = accountBalance
    }
    // Methods of the class
    public deposit(amount: number): void{
        if(amount>0){
            this.accountBalance +=amount
            console.log('Deposit successful');            
        }else{
            console.log('Invalid amount');            
        }
    }
   public withdraw(amount: number):void{
        if(this.accountBalance>=amount){
            this.accountBalance -=amount;
            console.log('Withdrawal successful');            
        }else{
            console.log('Insufficiant balance');            
        }
    }
   public displayBalance():void{
        console.log(`${this.accountName}-${this.accountNumber} balance is ${this.accountBalance}`);        
    }
}
const obj = new Bank(101,'John Peter', 1000)
obj.displayBalance()
// obj.accountBalance=27387387
obj.deposit(100)
obj.displayBalance()
obj.withdraw(500)
obj.displayBalance()