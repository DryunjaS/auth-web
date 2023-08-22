const {Schema,model} = require('mongoose')

const people = new Schema({
    name:{type:String,unicue:true},
    password:{type:String}
})

module.exports = model('People',people)