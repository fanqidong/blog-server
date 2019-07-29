import mongoose, { connection } from 'mongoose';
import config from '../config/default';
import chalk from 'chalk';
console.log(config.remoteUrl)
mongoose.connect(config.remoteUrl, {
    useNewUrlParser: true
});

mongoose.set('useCreateIndex', true);

connection.once('open', () => {
    console.log(chalk.green('连接数据库成功'));
});
connection.on('error', function(error) {
    console.error(chalk.red('Error in MongoDb connection: ' + error));
    mongoose.disconnect();
});

connection.on('close', function() {
    console.log(chalk.red('数据库断开，重新连接数据库'));
    mongoose.connect(config.remoteUrl, {
        server: {
            auto_reconnect: true
        }
    });
});
export default connection;
