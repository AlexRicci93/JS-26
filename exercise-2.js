function Person(firstName, lastName) {
  this.firstname = firstName;
  this.lastName = lastName;
  this.fullName = () => `${firstName} ${lastName}`  
}

let john = new Person('John', 'Doe');
let simon = new Person('Simon', 'Collins');

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins