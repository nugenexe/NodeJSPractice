// const Person = require('./person.js');
// import Person1 from './person.cjs';
// import './apiModules/testMAL.js'

// // console.log(process.env) 
// console.log(process.env.USER)
// console.log(process.platform)
// console.log(process)


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

// // // This doesn't import anything and just runs side effects
// // import './apiModules/testMAL.js'
// import './apiModules/malService.js'

// process.on('exit', foo => {
//     console.log(`exit Event = ${foo}`)
// })

// import './testing/eventEmitters.js';
// import './testing/filesSystem.js';

import expImp from 'express';

let exp = expImp()
const PORT = process.env.PORT || 8080;

exp.listen(PORT, () => {
    console.log('HELLooooo')
})

exp.get('/wat', (req, res) => {
    res.status(200).send({
        hi: 'world',
        issa: 'me'
    })

})
exp.get('/', (req, res) => {
    res.status(200).send({
        hi: 'wor'
    })

})


