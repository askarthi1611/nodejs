const mongoose = require('mongoose');
// const bycrypt = require('bycrypjs');
const db = require('./database');

//Schema

const Schema = mongoose.Schema({
    user:{type:String},
    mobile:{type:String,required:true},
    code:{type:String},
    name:{type:String},
    price:{type:String},
    per:{type:String},
    
})


const user=module.exports = mongoose.model('user',Schema)

module.exports.getUserBysername = function (username , callback) {
    const query ={username:username}
    user.findById(username,callback)    
}
module.exports.adduser = function (newUser,callback) {
    newUser.save()
}