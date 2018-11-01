var Shopper = require('./Shopper')
var Employee = require('./Employee')

var userfactory = (name, money, type, employer) => {
    if(type = 'employee'){
        return new Employee(name, money, employer);
    } else {
        return new Shopper(name, money);
    }
}

module.exports = userfactory;