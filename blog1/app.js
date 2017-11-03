let express = require('express');

let app = express();

let bodyParser = require('body-parser');

app.listen(3000);

app.set('view engine' , 'xtpl');

app.set('views' , './views');

app.use(express.static('./public'));

app.use(bodyParser.urlencoded({extended: false}));
// 模板目录


// 静态资源
app.use('/admin', (req, res, next) => {
    // 检测登录
    next();
})



//设置主路由
let admin = require('./routes/admin');
let home = require('./routes/home');

app.use('/admin', admin);


app.use('/', home);