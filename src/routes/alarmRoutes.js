const express = require('express')
const router = express.Router()
const axios = require("axios");
const alarmController = require('../controlles/alarmController')

let intervalID;

router.post('/', (req,res) =>{
   intervalID = setInterval(alarmController.generateAlarmData(), req.params.intermediate, 5000)
})
router.get('/', (req,res) =>{
    
})
router.get('/:id', (req,res) =>{
    
})
router.patch('/:id', (req,res) =>{
    
})


router.delete('/:id', (req,res) =>{

})

module.exports = router;