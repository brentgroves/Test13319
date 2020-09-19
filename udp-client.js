var udp = require('dgram');

// -------------------- udp client ----------------

var buffer = require('buffer');

// creating a client socket
var client = udp.createSocket('udp4');

//                    1234567890
var CNC103Frame = `     1, 1`
//              1234567890
CNC103Frame += `         1`
var data = Buffer.from(CNC103Frame);

// var data=Buffer.from('2515', 'hex');  //DC2

client.send(data,2222,'10.1.0.59',function(error){
//  client.send(data,2221,'localhost',function(error){
  if(error){
    client.close();
  }else{
    console.log('Data sent !!!');
  }
});

