var udp = require("dgram");

// -------------------- udp client ----------------

var buffer = require("buffer");

// creating a client socket
var client = udp.createSocket("udp4");
if(process.argv.length < 2)
{
    throw new Error('Must pass 1 argument');
}
var myArgs = process.argv;

// console.log(myArgs[2]);
var sToolCounter = myArgs[2].trim();
var LengthToolCounter = sToolCounter.length;
var LengthPadding = 10 - LengthToolCounter;
var nToolCounter = Number(sToolCounter); // returns NaN
if (Number.isNaN(nToolCounter)) {
  throw new Error("Abort: nTool_Counter isNAN");
} else {
//     common.log(`Set No: ${sSetNo}`);
}
//                1234567890
var EmptyBlock = `          `;
// console.log(`LengthToolCounter=${LengthToolCounter},LengthPadding=${LengthPadding}`);
var BlockToolCounter = EmptyBlock.substring(0,LengthPadding) + sToolCounter;
// console.log(' 0123456789');
// console.log('*'+BlockToolCounter+'*');

/*
START_MACHINING=50
END_MACHINING=51
END_MACHINING_NO_TIMER=52
*/
//               1234567890
var TestFrame = `      2,60`;
//            1234567890
TestFrame += `        50`; //START_MACHINING
TestFrame += `         1`; //Pallet_No
TestFrame += `         6`; //Tool_Var
TestFrame += BlockToolCounter;
// TestFrame += `         0`; //Tool_Counter

var data = Buffer.from(TestFrame);

// var data=Buffer.from('2515', 'hex');  //DC2

client.send(data, 2222, "172.20.88.16", function (error) {
  //  client.send(data,2221,'localhost',function(error){
 // client.close();
});

//               1234567890
TestFrame = `      2,60`;
//            1234567890
TestFrame += `        50`; //START_MACHINING
TestFrame += `         1`; //Pallet_No
TestFrame += `        66`; //Tool_Var
TestFrame += BlockToolCounter;
// TestFrame += `         0`; //Tool_Counter

data = Buffer.from(TestFrame);

// var data=Buffer.from('2515', 'hex');  //DC2

client.send(data, 2222, "172.20.88.16", function (error) {
  //  client.send(data,2221,'localhost',function(error){
  client.close();
});


