const person = {
    firstName: "John",
    lastName: "Peter",
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    },
    // Not possible to access the current object value using this
   fullName1: () => `${this.firstName} ${this.lastName}`
}

console.log(person.fullName());

console.log(person.fullName1());