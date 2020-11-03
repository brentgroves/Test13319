var udp = require('dgram');

// -------------------- udp client ----------------

var buffer = require('buffer');

// creating a client socket
var client = udp.createSocket('udp4');

//               1234567890
var TestFrame = `      2,50` 
//            1234567890
TestFrame += `         1` //VC1 
TestFrame += `         1` //Pallet #1


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
TestFrame = `      2,51` 
//            1234567890
TestFrame += `         1` //VC1 
TestFrame += `         1` //Pallet #1

client.send(data,2222,'172.20.88.16',function(error){
  //  client.send(data,2221,'localhost',function(error){
    if(error){
      client.close();
    }else{
      console.log('Data sent !!!');
    }
  });
  