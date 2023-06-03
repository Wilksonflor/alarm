const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/bionic", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conectado ao MongoDB');
  })
  .catch((err) => {
    console.log("Não foi possível conectar ao servidor MongoDB", err);
  });

const alarmSchema = new mongoose.Schema({
  serial: String,
  type: Number,
  checked: Boolean,
  deviceType: Number
});