// import EventEmitter = require("events"); typescript only
import EventEmitter from 'events';
const eventEmitter = new EventEmitter()

eventEmitter.on('testEvent', (event) => {
    console.log('event>')
    console.log(event)
    console.log('<event')
})

eventEmitter.emit('testEvent');

