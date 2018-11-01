var Logger = require('./Logger');
var Person = require('./Person');
var Pets = require('./Pets');

var logger = new Logger().getInstance();

var dhruv = new Person('Dhruv', 24);
var dhaval = new Person('Dhaval', 22);
var shlok = new Person('Shlok', 18);
var ash = new Pets('Ash', 5);

logger.logs.map(log => console.log(`    ${log.message}`));
