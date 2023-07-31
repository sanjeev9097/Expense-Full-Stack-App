
const connection = require('../config/db');

const path = require('path');

const newUsers = (req, res) => {
    const filePath = path.join(__dirname, '../public/signup.html');
    res.sendFile(filePath);
};

const addUsers = (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    connection.query('INSERT INTO users(name, email, password) values(?, ?, ?)',[name, email, password],(err, rows) => {
        if(err){
            console.log(err);
        }
        else{
            res.redirect('/users/signup');
        }
    })
}

module.exports = {newUsers, addUsers}