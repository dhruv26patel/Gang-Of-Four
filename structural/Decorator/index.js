var Shopper = require('./Shopper');
var {
  InventoryItem,
  GoldenInventoryItem,
  DiamondInventoryItem
} = require('./InventoryItem');

var alex = new Shopper('Alex', 15000);

var walkman = new InventoryItem("Walkman", 29.99);
var necklace = new InventoryItem("Necklace", 9.99);

var gold_necklace = new GoldenInventoryItem(necklace);
var diamond_gold_necklace = new DiamondInventoryItem(gold_necklace);

var diamond_walkman = new DiamondInventoryItem(walkman);

alex.purchase(gold_necklace);
alex.purchase(diamond_gold_necklace);

alex.printStatus();

diamond_gold_necklace.print();
