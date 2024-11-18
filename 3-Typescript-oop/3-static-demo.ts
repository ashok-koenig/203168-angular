class Bank{
    // Properties of the class
    private accountNumber:number;
    private _accountName: string;
    private _accountBalance:number;
    static lastAccountNumber: number = 100
    // Contructor of the class
    constructor(_accountName: string, _accountBalance:number){
        Bank.lastAccountNumber++
        this.accountNumber = Bank.lastAccountNumber
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
    // Static method
    static getLastAccontNumber(){
        console.log(`Last Account number allocated: ${Bank.lastAccountNumber}`);        
    }
}
const acc1 = new Bank('John Peter', 1000)
acc1.displayBalance()

const acc2 = new Bank('John Doe', 2000)
acc2.displayBalance()
Bank.getLastAccontNumber()
