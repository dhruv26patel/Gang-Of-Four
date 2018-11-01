var Logger = require('./Logger');

var logger = new Logger().getInstance();

class Pets {

    constructor (name, age){
        this.name = name; 
        this.age = age;
        logger.log(`The new created pet name is: ${name} and is ${age} old.`);
    }
    
}

module.exports = Pets;
