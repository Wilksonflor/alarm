const mongoose = require('mongoose')

const Alarm = mongoose.model('Alarm', {
    alarm: String,
    type: Number,
    checked: Boolean,
    deviceType: Number,
})

module.exports = Alarm