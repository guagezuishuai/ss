let express = require('express');

let app = express();

app.listen(3000 , (err) => {
    if(!err){
        console.log('服务器启动成功');
    }
});

app.set('view engine' , 'xtpl');

app.set('views' , './views');

app.use(express.static('public'));

//可以通过路由来区分前台网站和后台网站
//但是前台网站和后台网站又可以分成若干子路由
//如何才能将主路由和子路由联系起来呢？

//使用express.Router()来创建主路由,主路由可以认为是一个中间件
//主路由下再创建子路由

let admin = require('./routers/admin');
let home = require('./routers/home');

app.use('/admin' , admin);//中间件，筛选过程，哪个符合执行哪个use

app.use('/' , home);

