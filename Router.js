const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const controller = require('./controller')
const router = express.Router()

router.use(express.static('./public'))
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/reg',(req,res)=>{
    // res.sendFile(path.join(__dirname,'/public/reg.html'))
    res.render('reg',{
        message:""
    })
})
router.get('/login',(req,res)=>{
    // res.sendFile(path.join(__dirname,'/public/login.html'))
    res.render('login',{
        message:""
    })
})
router.get('/users',controller.users,(req,res)=>{
    // res.sendFile(path.join(__dirname,'/public/listUsers.html'))
    const listUsers = req.listUsers; // Получаем listUsers из объекта запроса
    res.render('listUsers',{
        users:listUsers
    })
})

router.post('/reg',controller.reg)
router.post('/login',controller.login)


module.exports = router