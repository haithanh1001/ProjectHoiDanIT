const express = require("express");
const { rmSync } = require("fs");
const app = express();

const port = 3000;

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/about',(req,res)=>{
    res.send('Toi la bi nguyen');
})
app.listen(port,()=>{
    console.log(`Example app listening on port: ${port}`);
})