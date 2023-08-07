// index.js
const Koa = require('koa')
const config = require('./default')
const mysql = require('./mysql')

const app =  new Koa()

app.use(async (ctx) => {
    let data = await mysql.query()
    ctx.body = {
        "code": 1,
        "data": data,
        "msg": 'ok'
    }
})

app.listen(config.port)

console.log(`listening on port ${config.port}`)
