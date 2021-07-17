// (function(exports, requires, module, __filename, __dirname){

// })

// console.log(__filename, __dirname);

class Person1 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hi, my name is ${this.name}, and I am ${this.age} years old.`);
    }
}

// module.exports = Person;

module.exports = Person1;