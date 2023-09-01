
var usermodel = require('../model/usermodel');

var status=0;

exports.register_ex = async(req,res)=>{

    var data = await usermodel.create(req.body);

   res.status(200).json({
    status:"success",
    data
   })
}

exports.login = async(req,res)=>{

    var data = await usermodel.find({"email":req.body.email});

    console.log(data);

    if(status==0)
    {
        if(data.length!=0)
        {
            if(data[0].password==req.body.password)
            {
                status=1;
                res.status(200).json({
                    status:"success",
                })
            }
            else
            {
                res.status(200).json({
                    status:"check your email and password",
                })
            }
        }
        else
        {
            res.status(200).json({
                status:"check your email and password",
            })
        }
    }
    else
    {
        res.status(200).json({
            status:"user is already login",
        })
    }
}

exports.logout = async(req,res)=>{

    if(status==0)
    {
        res.status(200).json({
            status:"user is log out",
        })
        
    }

}

