const express = require('express');

const app = express();

// get请求，query参数
app.get('/user', (req, res) => {
    // query参数
    console.log(req.query)
    // 使用send，向客户端响应一个json
    res.send({name: 'xiaofei', sex: 'boy'});
});

// post
app.post('/user', (req, res) => {
    // 使用send，向客户端响应一个json
    res.send({name: 'xiaofei', sex: 'boy'});

});

// 动态参数
app.get('/test/:id/:name', (req, res) => {
    console.log(req.params)
    res.send(req.params);
})

app.listen(80, () => {
    console.log("server is running at 127.0.0.1")
})