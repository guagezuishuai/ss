let http = require('http');

let app = http.createServer();

let url = require('url');

let fs = require('fs');

let path = require('path');

let mime = require('mime');
//3引入模板引擎
let templete = require('art-template')
// 4 配置模板引擎
templete.defaults.root = './views';
templete.defaults.extname = '.html';//默认后缀都为。art，我们修改为.html
//把html里面的{改成#
templete.defaults.rules[1].test = /##([@#]?)[ \t]*(\/?)([\w\W]*?)[ \t]*##/;

app.listen(3000);

app.on('request', (req, res) => {
    // 1 设计路由
    let {pathname} = url.parse(req.url);
    // 5 封装模板引擎
    res.render = function (tpl, data) {
        //console.log(tpl);  index
        let html = templete(tpl, data);
        res.writeHeader(200, {
            'content-Type': 'text/html ; charset = UTF-8'
        });
        res.end(html);
    }
    // 2 根据设计的路由找到客户需要响应的页面，此时需要模板引擎拼凑地址
    switch (pathname) {
        case '/':
        case './index':
            // 6 模板引擎加载显示页面
            res.render('index', {});
            break;
        default :
            // 7 读取文件并获取fs方法
            // 方法 1
            // fs.readFile('./public' + pathname);
            //方法2
            fs.readFile(path.join('./public', pathname), (err, data) => {
                //必须写判断，因为还有个字体图标favication我们没有
                if (!err) {
                    res.writeHeader(200, {
                        //获取文件格式
                        'content-Type': mime.getType(path.join('./public', pathname))
                    })
                }
                res.end(data);
            })
    }


})