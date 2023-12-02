const express =require('express')
const router = express.Router()
const user = require('./models');
const ipinfo_schema = require('./ipmodel');
const jwt = require('jsonwebtoken');
const passport = require('passport');
//Register
router.get('/reg',async (req,res,next)=>{
    const results = await user.find({}).exec();
    res.send(results);    
});
router.post('/register',(req,res,next)=>{
    let newuser=new user({
        user:req.body.user,
        mobile:req.body.mobile,
        code:req.body.code,
        name:req.body.name,
        price:req.body.price,
        per:req.body.per
    });
    user.adduser(newuser,(err,user)=>{
        if (err) {
            res.json({success:false,mgs:'Failed'})
        } else {
            res.json({success:true,mgs:'Success'})            
        }
    })
})
router.post('/ipinfo',(req,res,next)=>{
    let ip=new ipinfo_schema({
        ip:req.body.ip,
        city:req.body.city,
        region:req.body.region,
        country:req.body.country,
        loc:req.body.loc,
        org:req.body.org,
        postal:req.body.postal,
        timezone:req.body.timezone,
        readme:req.body.readme
    });
    ipinfo_schema.ipuser(ip,(err,user)=>{
        if (err) {
            res.json({success:false,mgs:'Failed'})
        } else {
            res.json({success:true,mgs:'Success'})            
        }
    })
})

module.exports = router;