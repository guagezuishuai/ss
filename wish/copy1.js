let http = require('http');

let app = http.createServer();

let url = require('url');

let fs = require('fs');

let path = require('path');

let mime = require('mime');

let db = require('./config/db');

let template = require('art-template');
template.defaults.root = './views';
template.defaults.extname = '.html'
template.defaults.rules[1].test = /##([@#]?)[ \t]*(\/?)([\w\W]*?)[ \t]*##/;

app.listen(3000 , (err) => {
    if(!err){
        console.log('服务器登录成功');
    }
})

app.on('request' , (req , res) =>{

    let {pathname,query} = url.parse(req.url,true);
    //console.log(pathname);
    //console.log(query);
    res.render = function (tpl, data) {
        let html = template(tpl,data);
        res.writeHeader(200, {
            'content-Type': 'text/html ; charset = UTF-8'
        });
        res.end(html);
    }


    switch (pathname){
        case '/':

        case '/index':
            db.query('select * from list', (err, rows) => {
                if (!err) {
                    // rows 查询结果，为数组类型
                    res.render('index', {list: rows});
                }
            });
        break;

        case '/create':
            //插入
            db.query('insert into list set ? ' , query , (err,info)=>{
                console.log(2);
                if (!err) {
                    // 响应数据为 json 格式
                    res.writeHeader('200', {
                        'Content-Type': 'application/json'
                    })

                    // 响应结果


                }
            })
            //console.log(req.url);
        break;

        default:
            fs.readFile(path.join('./public' , pathname) , (err,data) =>{
                if(!err){
                    res.writeHeader(200, {
                        'content-Type': mime.getType(path.join('./public', pathname))
                    });
                }
                res.end(data);
            })
        break;
    }
})