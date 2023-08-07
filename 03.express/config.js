module.exports = {
    port: 3300, // express 服务启动端口
    /* 数据库相关配置 */
    db: {
        host: 'localhost', // 主机名 localhost
        port: 3307,        // 本机 MySQL 默认端口为 3306
        user: 'root',          // 本机使用 root 用户登入 MySQL
        password: 'root123', //本机 MySQL 密码，用你自己的
        database: 'test' // 使用数据库
    }
}
