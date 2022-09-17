``// 引入http模块
const http = require('http');
// 创建服务器实例
const server = http.createServer();
// 给服务器绑定request事件
server.on('request', (req, res) => {
    console.log('有人访问了服务器', req.url, req.method);
    // 设置响应头,解决中文乱码的问题
    res.setHeader('Content-type', 'text/html;charset=utf-8');
    // 响应
    res.end('请求的地址是:'+req.url+';请求的方式是:'+req.method)
})
// 启动服务器
server.listen(80, ()=>{
    console.log('服务器运行在8099端口...');
})