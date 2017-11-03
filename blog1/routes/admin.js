
let express = require('express');

let admin = express.Router();

admin.get('/', (req, res) => {
    res.render('admin/index', {});

});

admin.get('/blog_add' , (req,res) =>{
    res.render('admin/blog_add', {});
})

admin.get('/blog_list' , (req,res) =>{
    res.render('admin/blog_list' , {});
})

admin.get('/repass' , (req,res) =>{
    res.render('admin/repass' , {});
})

admin.get('/settings' , (req,res) =>{
    res.render('admin/settings' , {});
})

module.exports = admin;