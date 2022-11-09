//const express = require("express");
import express from 'express';
import configViewEngine from './configs/viewEngine';
const app = express();
const port = 3000;
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