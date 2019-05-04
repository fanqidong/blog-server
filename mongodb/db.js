const mongoose = require('mongoose')
const config = require('../config/index')
const chalk = require('chalk')
mongoose.connect(config.url, {
    useNewUrlParser: true
})
mongoose.Promise = global.Promise
mongoose.set('useCreateIndex', true);
const db = mongoose.connection
db.once('open', () => {
    console.log(chalk.green('连接数据库成功'))
})
db.on('error', function (error) {
    console.error(
        chalk.red('Error in MongoDb connection: ' + error)
    );
    mongoose.disconnect();
})

db.on('close', function () {
    console.log(
        chalk.red('数据库断开，重新连接数据库')
    );
    mongoose.connect(config.url, {
        server: {
            auto_reconnect: true
        }
    });
})
module.exports = {
    db
}