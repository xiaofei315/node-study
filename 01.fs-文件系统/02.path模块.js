const fs = require('fs');
const path = require("path");

// 1.路径拼接
fs.readFile(path.join(__dirname, './write.txt'), 'utf8', (err, data) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(path.join(__dirname, './write.txt'), data);
    }
});

// 2.路径拼接
console.log(path.join('/a', '/b/c'));

// 3.baseName
const filePath = '/a/b/c/d.html';
console.log(path.basename(filePath));

// 4.文件拓展名
console.log(path.extname(filePath));