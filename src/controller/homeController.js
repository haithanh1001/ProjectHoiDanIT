import e from 'express';
import pool from '../configs/connectDB';

let getHomePage = async (req,res)=>{
    const [rows, fields] = await pool.execute('SELECT * FROM `users`');
    return res.render('index', {dataUsers: rows});
}

let getDetailPage = async (req,res) =>{
    let userId = req.params.userId;
    let [user] = await pool.execute(`SElECT * FROM users where id = ?`,[userId]);
    console.log(user);
    return res.send(JSON.stringify(user));
}

let createNewUser = async (req,res) =>{
    console.log(req.body);
    let {firstName, lastName, email, address} = req.body;
    await pool.execute('insert into users (firstName,lastName,email,address) values (?,?,?,?)',[firstName,lastName,email,address]);
    return res.redirect('/');
}

module.exports = {
    getHomePage,
    getDetailPage,
    createNewUser
} 