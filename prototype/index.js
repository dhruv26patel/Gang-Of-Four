var employee_prototype = require('./employee_prototype');

var dhruv = employee_prototype.clone();
dhruv.name("Dhruv");
dhruv.addSkillsToList('java');

var dhaval = employee_prototype.clone();
dhaval.name("Dhaval");
dhaval.addSkillsToList('node');

var shlok = employee_prototype.clone();
shlok.name("Shlok");
shlok.addSkillsToList('react');

console.log( `${dhruv.name}: ${dhruv.shoppingList}` );
console.log( `${dhaval.name}: ${dhaval.shoppingList}` );
console.log( `${shlok.name}: ${shlok.shoppingList}` );
