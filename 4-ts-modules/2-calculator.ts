export default class Calculator{
    constructor(private num1: number,private num2: number){

    }
    sum(): number {
        return this.num1 + this.num2
    }    
}
