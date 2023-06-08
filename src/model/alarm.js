const mongoose = require("mongoose");

const alarmSchema = mongoose.Schema({
  serial: String,
  type: Number,
  checked: Boolean,
  deviceType: Number
});

const Alarm = mongoose.model("Alarm", alarmSchema);

module.exports = Alarm;
