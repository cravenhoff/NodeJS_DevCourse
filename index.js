const Person = require("./person.js");

const person1 = new Person("John Doe", 30);

console.log("Hello from Node.js...");
console.log(person1);
console.log(person1.name);
console.log(person1.age);
person1.greeting();