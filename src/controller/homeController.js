import connection from '../configs/connectDB';

let getHomePage = (req,res)=>{
    let data =[]
    connection.execute('SELECT * FROM `users`',(err, results, fields)=>{
        for (let index = 0; index < results.length; index++) {
            const element = results[index];
            data.push({
                id: element.id,
                firstName: element.firstName,
                lastName: element.lastName,
                email: element.email,
                address: element.address
            })
        }
        return res.render('index', {dataUsers: JSON.stringify(data)});
    })
}

module.exports = {
    getHomePage
}