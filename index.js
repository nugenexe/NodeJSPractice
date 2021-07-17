// const Person = require('./person.js');
// import Person1 from './person.cjs';
// import './apiModules/testMAL.js'

// import { Duplicates } from './modules/duplicates.js'

// const person = new Person1('Tom', 30);

// // testing eslint ${} warning

// person.greet();

// // •	For each multiple of 3, print "Fizz" instead of the number
// // •	For each multiple of 5, print "Buzz" instead of the number
// // •	For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number
// // 0 - 100

// for(let i = 0; i <= 100; i++) {
//     let multipleOf3 = i % 3 === 0;
//     let multipleOf5 = i % 5 === 0;

//     if (multipleOf3 && multipleOf5) {
//         console.log('FizzBuzz');
//     } else if (multipleOf3) {
//         console.log('Fizz');
//     } else if (multipleOf5) {
//         console.log('Buzz');
//     }
// }


// 3.	Implement an algorithm to determine if a string has all unique characters.
//  It’s important that this is done algorithmically and doesn’t use built-in library
//   functions. What is the time complexity for your algorithm? What is the space complexity?

// "abc"

var testingDefaultImports = () => {
    import('./modules/duplicates.js')
        .then(({Duplicates: Duplicates}) => { // Destructuring avoid variable creation
            //https://2ality.com/2017/01/import-operator.html
            // var Duplicates = module.Duplicates
            console.log(Duplicates.checkString(''))
            console.log(Duplicates.checkString('abca'))

            console.log(Duplicates.checkString('a'))
            console.log(Duplicates.checkString('abc'))

        })

}

// // import Duplicates from './modules/duplicates.js';
// testingDefaultImports()

import './apiModules/testMAL.js'

