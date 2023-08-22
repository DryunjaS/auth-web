const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const controller = require('./controller')
const router = express.Router()

router.use(express.static('./public'))
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/reg',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/reg.html'))
})
router.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/login.html'))
})
router.get('/users',controller.users,(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/listUsers.html'))
})

router.post('/reg',controller.reg)



module.exports = router