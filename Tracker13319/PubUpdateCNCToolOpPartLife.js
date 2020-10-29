const mqtt = require('mqtt');
var moment = require("moment");

const MQTT_SERVER='localhost';
const MQTT_PORT='1882';


function main()
{
  console.log(`MQTT_SERVER=${MQTT_SERVER},MQTT_PORT=${MQTT_PORT}`);
  const mqttClient = mqtt.connect(`mqtt://${MQTT_SERVER}:${MQTT_PORT}`);

  mqttClient.on('connect', function() {
    // const transDate = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    const transDate = '2020-09-05 09:50:00';
    console.log(`mqtt transDate=>${transDate}`);
    let tcMsg = {
      CNC_Approved_Workcenter_Key: 2,
      Set_No: 1,
      Block_No: 1,
      Current_Value: 99,  // We need this for tool change alerts
      Running_Total: 109, // We need this to see how many parts 
      // have been machined for this part.
      Last_Update: transDate
    };

    let tcMsgString = JSON.stringify(tcMsg);
    console.log(`Published UpdateCNCToolOpPartLife; => ${tcMsgString}`);
    mqttClient.publish("UpdateCNCToolOpPartLife", tcMsgString);
  });

}

main();

/*

        let tcMsg = {
          CNC_Part_Operation_Key: nCNCPartOperationKey,
          Set_No: nSetNo,
          Block_No: nBlockNo,
          Actual_Tool_Assembly_Life: currentAssembly.RunningTotal,
          Trans_Date: transDate,
        };

        let tcMsgString = JSON.stringify(tcMsg);
        console.log(`Published InsToolAssemblyChangeHistory => ${tcMsgString}`);
        mqttClient.publish("InsToolAssemblyChangeHistory", tcMsgString);
*/
