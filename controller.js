const People = require('./users')
const bcrypt = require('bcryptjs');

class controller{
    async reg(req,res){
        try{
            const username = req.body.username
            const userpassword = req.body.password
            const candidate = await People.findOne({name:username})
            if(candidate){
                return res.render('reg',{
                    message:"Пользователь с таким именем уже существует!"
                })
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
            const username = req.body.username
            const userpassword = req.body.password
            const candidate = await People.findOne({name:username})
            if(!candidate){
                res.render('login',{
                    message:"Пользователя с таким именем не существует!"
                })
            }
            const validpass = bcrypt.compareSync(userpassword, candidate.password);
            if(!validpass){
                res.render('login',{
                    message:"Неверный пароль!"
                })
            }
            res.redirect('/auth/users');
        }
        catch(err){
            console.log(err) 
        }
    }
    async users(req,res,next){
        try{
            const listUsers = await People.find();
            req.listUsers = listUsers; 
            next();
        }
        catch(err){
            console.log(err)
        }
    }
}

module.exports = new controller()