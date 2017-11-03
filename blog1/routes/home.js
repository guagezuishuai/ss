
let express = require('express');

let home = express.Router();

home.get('/', (req, res) => {
    res.render('home/index', {});

});

home.get('/about' , (req,res) => {
    res.render('home/about' , {});
})

home.get('/article' , (req,res) => {
    res.render('home/article' , {});
})

home.get('/center' , (req,res) => {
    res.render('home/center' , {})
})

home.get('/join' , (req,res) => {
    res.render('home/join' , {});
})

home.get('/login' , (req,res) => {
    res.render('home/login');
})

home.get('/register' , (req,res) => {
    res.render('home/register' , {});
})

home.post('/register' , (req,res) =>{
    console.log(1);
})
module.exports = home;