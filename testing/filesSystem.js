import {readFile, readFileSync} from 'fs'
import {readFile as readFilePrm} from 'node:fs/promises'


// Figuring out forcing readFile to be SYNC
//https://zellwk.com/blog/converting-callbacks-to-promises/#:~:text=Writing%20your%20own%20promise
// (async function spam() {
//     const readFileAsync = await readFile('./.env', (err, data) => {console.log('qwer'); return 'asdfasf'});
//     console.log('foo1 = ' + readFileAsync )

// })()
// var eggs = await readFilePrm('./.env', {encoding: 'utf-8'})
// console.log('eggs')
// console.log(eggs)
// console.log('eggs')
const rfProConv = () => {
    return new Promise((resolve, reject) => {
        readFile('./.env' ,(err, data) => {
            if(err) reject();
            else resolve(data)
        })
    })
}
let bar = rfProConv();
console.log(`POP = ${await bar}`)



const envSync = readFileSync('./.env', 'utf8')
// let splited = envSync.split(/\r?\n/);
let splited = JSON.parse(envSync);
console.log(`MALCLIENTID = ${splited.MALCLIENTID}, MALSECRETID = ${splited.MALCLIENTSECRET}`)
