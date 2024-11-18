export namespace MyNS{
    export const message: string = 'My Message'
    export function greet(name: string){
        console.log('Welcome '+ name);
    }
    export class Calculator{
        constructor(private num1: number,private num2: number){    
        }
        sum(): number {
            return this.num1 + this.num2
        }    
    }
}