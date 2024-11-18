function calculate(price:number, quantity:number=1, discount:number=0):number{
    return (price * quantity) - discount
}

console.log(calculate(10,5, 3));

const greet = (name: string): void => {
    console.log(`Welcome ${name}`)
}

greet('John')