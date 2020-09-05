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

    /* Less than tool life */
    console.log(`MQTT connection established`);
    let tcMsg = {
      CNC_Part_Operation_Key: 1,
      Set_No: 1,
      Block_No: 1,
      Actual_Tool_Assembly_Life: 80500,
      Trans_Date: transDate,
    };

    let tcMsgString = JSON.stringify(tcMsg);
    console.log(`Published InsToolAssemblyChangeHistory => ${tcMsgString}`);
    mqttClient.publish("InsToolAssemblyChangeHistory", tcMsgString);
/*
(CNC_Part_Operation_Assembly_Key,CNC_Key,Part_Key,Operation_Key,Assembly_Key,Increment_By,Tool_Life,Current_Value,Fastest_Cycle_Time,Last_Update)
                             Assembly_Key 
-- values (1,1,2809196,56409,1,2,80500,-1,300,@Last_Update )  -- vc10
-- values (2,1,2809196,56409,2,2,132000,-1,300,@Last_Update)  -- vc11
-- values (3,1,2809196,56409,3,2,52600,-1,300,@Last_Update)
-- values (4,1,2809196,56409,4,2,78000,-1,300,@Last_Update)  -- vc12
-- values (5,1,2809196,56409,5,2,40000,-1,300,@Last_Update)
-- values (6,1,2809196,56409,6,2,999999,-1,300,@Last_Update)
-- values (7,1,2809196,56409,7,2,72000,-1,300,@Last_Update)
-- values (8,1,2809196,56409,8,2,50000,-1,300,@Last_Update)
-- values (9,1,2809196,56409,9,2,999999,-1,300,@Last_Update)
-- values (10,1,2809196,56409,10,2,110000,-1,300,@Last_Update)
-- values (11,1,2809196,56409,11,2,100000,-1,300,@Last_Update)
-- values (12,1,2809196,56409,12,2,110000,-1,300,@Last_Update)

CNC_Part_Operation_Set_Block (CNC_Part_Operation_Set_Block_Key,CNC_Key,Part_Key,Operation_Key,Set_No,Block_No,Assembly_Key)
                                 Assembly_Key
-- values (1,1,2809196,56409,1,1,1)
-- values (2,1,2809196,56409,1,2,2)
-- values (3,1,2809196,56409,1,3,3)
-- values (4,1,2809196,56409,1,4,4)
-- values (5,1,2809196,56409,1,5,5)
-- values (6,1,2809196,56409,1,6,6)
-- values (7,1,2809196,56409,1,7,7)
-- values (8,1,2809196,56409,1,8,8)
-- values (9,1,2809196,56409,1,9,9)
-- values (10,1,2809196,56409,2,1,10)
-- values (11,1,2809196,56409,2,2,11)
-- values (12,1,2809196,56409,2,3,12)

*/
    /* Equal to tool life */
    /* Greater than tool life */
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
