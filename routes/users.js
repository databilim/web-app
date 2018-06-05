const express = require('express');
const router = express.Router();
const User = require("../model/Users")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');

/* GET users listing. */
router.get('/', (req, res, next)=> {
  res.send('respond with a resource');
});

router.post("/",(req,res,next)=>{

      const {username , password,email }= req.body;

    bcrypt.hash(password, 10).then((hash) =>{
        // Store hash in your password DB.

        const  userekle = new User({
            username,
            password : hash,
            email
        })

        const promise = userekle.save();
        promise.then((data)=>{
            res.json({status:1,data:data})

        }).catch((err)=>{
            res.json({status:0, err:err})
        })
    })


})


router.post("/login",(req,res)=>{

    const {username,password} = req.body;

    User.findOne({ username,  },(err,user)=>{

        if(err)
            throw err;
        if(! user){
             res.json({status:false, message : ' User not found'})
        }else{

            bcrypt.compare(password,user.password).then((result)=>{

                if(! result){
                    res.json({status:false, message : 'User Not Found password ' })
                }else{

                    const payload = {
                        username,

                    }

                    const token = jwt.sign(payload,app.get("api_secret_key"),{
                        expiresIn: 1, /// 1 dakika
                    })

                    res.json({
                        status:true,
                        token
                    })
                }
            })
        }
    })

})


module.exports = router;
 