var user_factory = require('./user_factory');

var alex = user_factory('Alex Banks', 100);
var eve = user_factory('Eve Porcello', 100, 'employee', 'This and That');

eve.payDay(100);

console.log( alex.toString() )
console.log( eve.toString() )
