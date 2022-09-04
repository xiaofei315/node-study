const fs = require('fs');
const path = require('path');

const regStyle = /<style>[\s\S]*<\/style>/;

const regScript = /<script>[\s\S]*<\/script>/;


// 删除目录
// fs.rmdirSync(path.join(__dirname, 'clock'), {
//     recursive: true,
// })

fs.readFile(path.join(__dirname, 'test.html'), 'utf8', (err, data) => {
    if (err) {
        return console.log('读取文件失败，', err.message);
    }
    resolveCss(data);
    resolveScript(data);
    resolveHtml(data);
})

const resolveCss = (htmlStr) => {
    const r1 = regStyle.exec(htmlStr);
    const newCss = r1[0].replace('<style>', '').replace('</style>', '');
    fs.mkdir(path.join(__dirname, './clock'), err => {
        if (err) {
            return console.log('创建目录失败', err.message);
        }
        console.log('创建目录成功');
    });
    fs.writeFile(path.join(__dirname, './clock/index.css'), newCss, err => {
        if (err) {
            return console.log('写入css失败', err.message);
        }
        console.log('写入css成功!');
    })

}

const resolveScript = (htmlStr) => {
    const r1 = regScript.exec(htmlStr);
    const newScript = r1[0].replace('<script>', '').replace('</script>', '');
    fs.writeFile(path.join(__dirname, './clock/index.js'), newScript, err => {
        if (err) {
            return console.log('写入Script失败', err.message);
        }
        console.log('写入Script成功!');
    })

}

const resolveHtml = (htmlStr) => {
    const newHtml = htmlStr
        .replace(regStyle, '<link rel="stylesheet" href="./index.css" />')
        .replace(regScript, '<script src="./index.js"></script>');
    fs.writeFile(path.join(__dirname, './clock/index.html'), newHtml, err => {
        if (err) {
            return console.log('写入HTML失败', err.message);
        }
        console.log('写入HTML成功!');
    })
    // 追加内容
    // fs.appendFile(path.join(__dirname, './clock/index.html'), newHtml, err => {
    //     if (err) {
    //         return console.log('追加HTML失败', err.message);
    //     }
    //     console.log('追加HTML成功!');
    // })
}

