require('dotenv').config();
module.exports = {
    DATABASE : {
        name: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        options : {
            host: 'localhost',
            port : 3306,
            dialect : 'mysql',
            logging: false,
        }
    },
}