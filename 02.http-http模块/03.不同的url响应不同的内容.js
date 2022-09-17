// 引入http模块
const http = require('http');
// 创建服务器实例
const server = http.createServer();
// 给服务器绑定request事件
server.on('request', (req, res) => {
    const url = req.url;
    let content = '<h1>404 not found</h1>';
    if (url === '/' || url === '/index.html') {
        content = '<h1>首页</h1>'
    } else if (url === '/about.html') {
        content = '<h1>关于</h1>'
    }
    // 设置响应头,解决中文乱码的问题
    res.setHeader('Content-type', 'text/html;charset=utf-8');
    // 响应
    res.end(content);
});
// 启动服务器
server.listen(80, () => {
    console.log('服务器运行在8099端口...');
})