
import express from 'express';
import configViewEngine from './configs/viewEngine';
require('dotenv').config();
import initWebRoute from './route/web';
import initAPIRoute from './route/api';
import connection from './configs/connectDB.js';
// const connection = require('./configs/connectDB');
const app = express();
const port = process.env.PORT || 8080;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// setup view engine
configViewEngine(app);

//init web route
initWebRoute(app);

initAPIRoute(app);

app.listen(port,()=>{
    console.log(`Example app listening on port: ${port}`);

    
})

