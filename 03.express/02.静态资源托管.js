const express = require('express');

const app = express();

// 托管多个静态资源，按添加顺序进行访问
app.use(express.static('./public'));

app.use('/file', express.static('./file'));


app.listen(80, () => {
    console.log('server is running at 127.0.0.1');
})