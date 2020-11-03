var udp = require('dgram');

// -------------------- udp client ----------------

var buffer = require('buffer');

// creating a client socket
var client = udp.createSocket('udp4');

//               1234567890
var TestFrame = `      2,60` 
//            1234567890
TestFrame += `        50` //Command Variable 
TestFrame += `         1` //Pallet_No
TestFrame += `         1` //Tool_No


var data = Buffer.from(TestFrame);

// var data=Buffer.from('2515', 'hex');  //DC2

client.send(data,2222,'172.20.88.16',function(error){
//  client.send(data,2221,'localhost',function(error){
  if(error){
    client.close();
  }else{
    console.log('Data sent !!!');
  }
});

//               1234567890
var TestFrame = `      2,60` 
//            1234567890
TestFrame += `        51` //Command Variable 
TestFrame += `         1` //Pallet_No
TestFrame += `         1` //Tool_No

client.send(data,2222,'172.20.88.16',function(error){
  //  client.send(data,2221,'localhost',function(error){
    if(error){
      client.close();
    }else{
      console.log('Data sent !!!');
    }
  });
  