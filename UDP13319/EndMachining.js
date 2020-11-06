var udp = require('dgram');

// -------------------- udp client ----------------

var buffer = require('buffer');

// creating a client socket
var client = udp.createSocket('udp4');
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
TestFrame += `         1` //Tool_No
data = Buffer.from(TestFrame);

client.send(data,2222,'172.20.88.16',function(error){
  //  client.send(data,2221,'localhost',function(error){
    client.close();

  });

  