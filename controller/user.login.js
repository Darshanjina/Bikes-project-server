var user = require('../model/user.schema');
var jwt = require('jsonwebtoken');

function userInsert(req,res){
    var userData = new user({
        username:req.body.username,
        password:req.body.password
    });

    userData.save()
    .then(()=>{
        res.json({
            status:'OK',
            message:'record inserted successfully'
        });
    })
    .catch((err)=>{
        res.json({
            status:'NOK',
            message:err
        });
    })
};

function verifyUser(req,res){
    var userData ={
        username:req.body.username,
        password:req.body.password
    };
    user.findOne(userData)
    .then((data)=>{
        if(data === null || data === undefined || data === ""){
            res.json({
                status:'NOK',
                message:'login failed'
            });
        }
        else{
            var token = jwt.sign({data:data} , '1234' ,{expiresIn:30000});
            res.json({
                status:'OK',
                message:'user successfully login',
                token:token
            });
        }
    })
    .catch((err)=>{
        res.json({
            status:'NOK',
            message:err
        })
    })
}

module.exports.userInsert = userInsert;
module.exports.verifyUser = verifyUser;