const express =require('express');
const cors =require('cors');
const path =require('path');
const passport =require('passport');
const mongoose =require('mongoose');
const bodyParser = require('body-parser');
const app= express()
const db= require('./database')
app.use(cors())//CORS Middleware
app.use(bodyParser.json())
const port =80; //set port  number for app
mongoose.connect(db.database)//Connect to Database
mongoose.connection.on('connected',()=>{
    console.log(`Connected to the database ${db.database}`);
})
mongoose.connection.on('error',(err)=>{
    // console.log(`error to the database ${err}`);
})
app.use(express.static(path.join(__dirname,'public')))
app.get('/',(req,res)=>{ //set index route
    res.send("Invalid Endpoint")
})
const route = require('./routers');//set router
const database = require('./database');
app.use('/',route)
app.listen(port,()=>{
    console.log('Server Started on Port '+port);
})