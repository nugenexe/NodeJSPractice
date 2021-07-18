// const Person = require('./person.js');
// import Person1 from './person.cjs';
// import './apiModules/testMAL.js'

// testingDynamicImports()
var testingDynamicImports = () => {
    import('./modules/duplicates.js')
        .then(({ Duplicates: Duplicates }) => { // Destructuring avoid variable creation
            //https://2ality.com/2017/01/import-operator.html
            // var Duplicates = module.Duplicates
            console.log(Duplicates.checkString(''))
            console.log(Duplicates.checkString('abca'))

            console.log(Duplicates.checkString('a'))
            console.log(Duplicates.checkString('abc'))

        })

}

// // This doesn't import anything and just runs side effects
// import './apiModules/testMAL.js'
import './apiModules/malService.js'
