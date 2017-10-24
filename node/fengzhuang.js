//在Node JS 中对很多常用的功能进行了封装
//我们将这些封装好的“东西”叫做模块

//有很多模块随NodeJS的安装被自动安装好了
//称为系统模块，常见的系统模块有
//fs path http os ....





//OS 模块封装了读取系统信息的功能

//要想使用OS模块需要使用require先将其引入

//require需要传入系统模块名称，并且会得到一个返回值
//let os = require('os');

//console.log(os);

//console.log(os.hostname());

//console.log(os.cpus());

//console.log(os.userInfo());




//let fs = require('fs');
//mkdir 可以支持两个参数
//第一个目录名称
//第二个回调函数
//fs.mkdir('test', function (abc) {//创建目录
    //如果有错误，abc为一个对象
    //描述了错误的原因
    //如果没有错 abc为null
//    console.log(abc);
//})

//fs.writeFile('./test/aa.html' ,'<h1>hello Node!</h1>',(err) => {
//    //console.log(err);
//    if(!err) {
//        console.log('文件创建成功!');
//    }
//})






//通过系统模块path可以用来获得路径相关信息
//比如文件名、目录名、文件后缀等
let path = require('path');

let js = './node11.js';

//1 通过path模块提供的parse方法，可以解析出文件目录相关的信息

//console.log(path.parse(js));

//console.log(path.parse(js).dir);

//console.log(path.parse(js).base);

//console.log(path.parse(js).ext);

//console.log(path.parse(js).name);

let {dir,name,ext} = path.parse(js);

console.log(dir , name , ext);












let http = require('http');

let url = require('url');

//通过createServer 得到一个服务器实例
let server = http.createServer();

//通过服务器实例来处理请求和响应

//get/post + url

//get + localhost:3000

//通过服务器实例的listen方法，来实现端口的监听

server.listen(3000);

//通过服务器实例request事件来处理客户端（浏览器）的请求
//并根据情况做出响应
//通过on方法来实现事件的监听

server.on('request',(req,res) => {
    console.log('有人来访问了。。。');
    //console.log(req);
    //console.log(req.headers);
    //console.log(req.url);
    console.log(url.parse(req.url, true));
    //在回调函数当中可以设置两个参数，分别对应请求和响应
    //第一个表示请求相关，习惯上使用req
    //第二个表示响应相关，习惯上使用res
    //res.writeHead('200',{
    //    'Content-type' : 'text/text; charset=UTF-8'
    //})

    res.write('hello browser!');
    res.write('哈哈哈');

    // 响应结束
    res.end();
})
















