import connection from '../configs/connectDB';

let getHomePage = (req,res)=>{
    let data =[]
    connection.execute('SELECT * FROM `users`',(err, results, fields)=>{
        results.map((row)=>{
            data.push({
                id: row.id,
                firstName: row.firstName,
                lastName: row.lastName,
                email: row.email,
                address: row.address
            })
        })
        return res.render('index', {dataUsers: JSON.stringify(data)});
    })
}

module.exports = {
    getHomePage
}