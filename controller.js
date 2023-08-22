const People = require('./users')
const bcrypt = require('bcryptjs');

class controller{
    async reg(req,res){
        try{
            const username = req.body.username
            const userpassword = req.body.password
            const candidate = await People.findOne({name:username})
            console.log(candidate)
            if(candidate){
                return res.redirect('/auth/reg');
            }
            const passwordHash = bcrypt.hashSync(userpassword, 7)
            const people = new People({name:username,password:passwordHash})
            await people.save()
            res.redirect('/auth/users');
        }
        catch(err){
           console.log(err) 
        }
    }
    async login(req,res){
        try{
            
        }
        catch(err){
            console.log(err) 
        }
    }
    async users(req,res,next){
        try{
            const listUsers = await People.find()
            console.log(listUsers)
            next()
        }
        catch(err){
            console.log(err)
        }
    }
}

module.exports = new controller()