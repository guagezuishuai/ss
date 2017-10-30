let express = require('express');
//后台主路由
let admin = express.Router();

admin.get('/a' , (req , res) => {
    res.render('admin/index' , {});
});

admin.get('/b' , (req,res) => {
    res.render('admin/blog_add' , {});
})

admin.get('/c' , (req,res) => {
    res.render('admin/blog_list' , {});
})

admin.get('/d' , (req,res) => {
    res.render('admin/repass' , {});
})

admin.get('/e' , (req,res) => {
    res.render('admin/settings' , {});
})
module.exports = admin;//将admin暴露出去

