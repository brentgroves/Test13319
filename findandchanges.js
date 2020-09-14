const config = require('./config.json');
var item = {id:2,test:'Test'};
var items = [{id:2,test:'Not Changed'}, {id:2}, {id:2}];

console.log(`items=>${JSON.stringify(items)}`);
var foundIndex = items.findIndex(x => x.id == item.id);
items[foundIndex] = item;
console.log(`items=>${JSON.stringify(items)}`);

var id = '1'
var foundIndex = config.nodes.findIndex(node => node.updateId == id);
config.nodes[foundIndex].value = 5;
config.nodes[foundIndex].transDate='2020-09-14 00:00:00';
console.log(`${JSON.stringify(config.nodes)}`); 