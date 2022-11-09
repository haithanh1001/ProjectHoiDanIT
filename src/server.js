//const express = require("express");
import express from 'express';
import configViewEngine from './configs/viewEngine';
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3001;
configViewEngine(app);
app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/about',(req,res)=>{
    res.send('Toi la bi nguyen');
})
app.listen(port,()=>{
    console.log(`Example app listening on port: ${port}`);
})