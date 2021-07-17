// // // https://medium.com/free-code-camp/require-module-in-node-js-everything-about-module-require-ccccd3ad383#:~:text=a%20module%20run%3F-,Before,-executing%20the%20code
// (function(exports, requires, module, __filename, __dirname){

// })

// console.log(__filename, __dirname);

// import what from './person copy';
// const foo = new what('sdf', 31);

const test = require('./personcopy.cjs');

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hi, my name is ${this.name}, and I am ${this.age} years old.`);
    }
}

module.exports = Person;