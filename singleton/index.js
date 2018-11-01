var Logger = require('./Logger');
var Person = require('./Person');

var logger = new Logger().getInstance();

logger.log('starting app...');

var person = [
    {
        name:'Dhruv', 
        age: 23
    }, 
    {
        name: 'Dhaval',
        age: 22
    },
    {
        name: 'Shlok',
        age: 18
    }
]

logger.log('finished config...');

console.log(`${logger.count} logs total`);
logger.logs.map(log => console.log(`   ${log.message}`));
