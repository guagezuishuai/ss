let express = require('express');
//前台主路由
let home = express.Router();
home.get('/index' , (req,res) =>{//get方式传递参数，是中间件的最后一步
    res.render('home/index' , {});//两个参数 1 地址 2 数据（记住改文件后缀）
});

home.get('/article' , (req,res) =>{
    res.render('home/article', {});
})

home.get('/about' , (req,res) =>{
    res.render('home/about' , {});
})

home.get('/center' , (req , res) => {
    res.render('home/center' , {})
})

home.get('/join' , (req,res) => {
    res.render('home/join' , {});
})

home.get('/login' , (req,res) => {
    res.render('home/login' , {});
})

home.get('/register' , (req,res) => {
    res.render('home/register' , {});
})

module.exports = home;//将home暴露出去