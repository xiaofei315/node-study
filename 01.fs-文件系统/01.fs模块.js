const fs = require('fs');

fs.readFile('./README.md', 'utf8', (err, dataStr) => {
    if (err) {
        return console.log('文件读取失败', err.message)
    } else {
        console.log(dataStr)
    }
})

fs.writeFile('./write.txt', '我是一个字符串', (err) => {
    if (err) {
        return console.log('文件写入失败', err.message)
    }
    console.log('写入成功');
})
