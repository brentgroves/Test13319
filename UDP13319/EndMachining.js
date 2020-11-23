var udp = require('dgram');

// -------------------- udp client ----------------

var buffer = require('buffer');

// creating a client socket
var client = udp.createSocket('udp4');

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
var TestFrame = `      2,60` 
//            1234567890
TestFrame += `        51` //End Machining
TestFrame += `         1` //Pallet_No
TestFrame += `         8` //Tool_Var
TestFrame += BlockToolCounter;
// TestFrame += `         2` //Tool_Counter
/*
	-- set @pTool_Var = 1;  -- Assembly_Key = 13, tool_Key = 1
	set @pTool_Var = 12; -- REWORK Primary_tool_key 8,Alternate_Tool_Key = 9
	-- set @pTool_Var = 22; -- REWORK tool_key 15
	-- set @pTool_Var = 15; -- alt in use  Alternate_Tool_Key=12,Primary_Tool_key 13

*/
var data = Buffer.from(TestFrame);

client.send(data,2222,'172.20.88.16',function(error){
  //  client.send(data,2221,'localhost',function(error){
    client.close();

  });

