var datetime = require("node-datetime");

const dateTime = datetime.create();
const suffix = dateTime.format("ymdHMS");
const formatDateTime = dateTime.format("Y/m/d I:M p");

console.log(`Current date-time=${formatDateTime}`);