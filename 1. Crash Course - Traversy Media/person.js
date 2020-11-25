/* Module Wrapper Function
function (exports, require, module, __filename, __dirname) {
    // Imported module code is encompasses in here...
}
*/

// Proving that the arguments of the module wrapper function are accessible in this file
console.log(__dirname, __filename);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }
}

module.exports = Person;