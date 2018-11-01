var Logger = require('./Logger');

var logger = new Logger().getInstance();

class Person {

    constructor (name, age){
        this.name = name; 
        this.age = age;
        logger.log(`The new created person name is: ${name} and is ${age} old.`);
    }
    
}

module.exports = Person;
