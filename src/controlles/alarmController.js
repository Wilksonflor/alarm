const axios = require("axios");
const Alarm = require('../model/alarm')

function generateAlarmData() {
  const data = {
    serial: "123456789",
    type: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
    checked: false,
    deviceType: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
  };

  console.log("SendData", data);
  Alarm
  .save()
  .then(()=>{
    console.log("Alarme Salvo")
  }).catch((err)=>{
    console.error('erro ao salvar', err)
  })
  axios
    .post("http://localhost:8082/alarm", data)
    .then((res) => {
      console.log("dado enviado");
    })
    .catch((error) => {
      console.error(error);
    });
}

module.exports = { generateAlarmData };
