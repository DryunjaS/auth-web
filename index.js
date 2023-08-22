const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./Router')
const PORT = process.env.PORT || 5000
const app = express()

app.use('/auth',authRouter)

const start = async()=>{
     try{
        await mongoose.connect(`mongodb+srv://qwer:qwer123@cluster0.3fmvxpp.mongodb.net/?retryWrites=true&w=majority`)
        app.listen(PORT,()=>{
            console.log(`server start on port ${PORT}`)
        })
     }
     catch(err){
        console.log(err)
     }
}

start()