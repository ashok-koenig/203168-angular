const numbers = [1,2,3,4,5]
// numbers.push(6)
// console.log(numbers.length);
// numbers[0]=100
// console.log(`Frist value is ${numbers[0]}`);
// const myArray = Array.from('123456')
// console.log(myArray);

// Finding an element with indexOf

console.log(numbers.indexOf(3));

// function myFunction(value, index, array){
//     return value>3
// }
// let result = numbers.find(myFunction)
// console.log('Value: '+ result);
// let resultIndex = numbers.findIndex(myFunction)
// console.log('Index: '+ resultIndex);

let result = numbers.find((value, index, array)=>value>3)
console.log('Value: '+ result);
