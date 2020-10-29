var udp = require('dgram');

// -------------------- udp client ----------------

var buffer = require('buffer');

// creating a client socket
var client = udp.createSocket('udp4');

//               1234567890
var TestFrame = `      2, 1` 
//            1234567890
TestFrame += `        11` //VC1 make greater than increment_by 
TestFrame += `        21` //VC21
TestFrame += `        22` //VC22
TestFrame += `        23` //VC23
TestFrame += `        72` //VC72
TestFrame += `        33` //VC33
TestFrame += `        34` //VC34
TestFrame += `        30` //VC30
TestFrame += `         4` //VC4





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

