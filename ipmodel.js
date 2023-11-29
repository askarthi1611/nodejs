const mongoose = require('mongoose');
// const bycrypt = require('bycrypjs');
const db = require('./database');

//Schema


const ipSchema = mongoose.Schema({
    ip:{type:String,required:true},
    city:{type:String},
    region:{type:String},
    country:{type:String},
    loc:{type:String},
    org:{type:String},
    postal:{type:String},
    timezone:{type:String},
    readme:{type:String},
    
})


const ipinfo_schema=module.exports = mongoose.model('ipinfo_schema',ipSchema)

module.exports.ipuser = function (newUser,callback) {
    console.log(newUser);
    newUser.save()
}