class Bank{
    // Properties of the class
    private accountNumber:number;
    private _accountName: string;
    private _accountBalance:number;
    // Contructor of the class
    constructor(accountNumber:number,_accountName: string, _accountBalance:number){
        this.accountNumber = accountNumber
        this._accountName= _accountName
        this._accountBalance = _accountBalance
    }
    // Methods of the class
    public get accountBalance(): number{
        return this._accountBalance;
    }
    public set accountName(name: string){
        this._accountName = name;
    }
    public get accountName(): string{
        return this._accountName
    }
    public deposit(amount: number): void{
        if(amount>0){
            this._accountBalance +=amount
            console.log('Deposit successful');            
        }else{
            console.log('Invalid amount');            
        }
    }
   public withdraw(amount: number):void{
        if(this._accountBalance>=amount){
            this._accountBalance -=amount;
            console.log('Withdrawal successful');            
        }else{
            console.log('Insufficiant balance');            
        }
    }
   public displayBalance():void{
        console.log(`${this._accountName}-${this.accountNumber} balance is ${this._accountBalance}`);        
    }
}
const obj = new Bank(101,'John Peter', 1000)
obj.displayBalance()
console.log("Balance using Getter: ", obj.accountBalance);
obj.accountName = "John Doe"
obj.deposit(100)
obj.displayBalance()
obj.withdraw(500)
obj.displayBalance()
console.log("Name using Getter: ", obj.accountName);