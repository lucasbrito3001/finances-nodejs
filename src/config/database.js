// require('dotenv').config();

// // HEROKU

// const Sequelize = require('sequelize');
// const sequelize = new Sequelize(
//     process.env.DB_DATABASE,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     { dialect: 'postgres', host: process.env.DB_HOST }
// );

// sequelize.authenticate().then(() => {
//     console.log('Conexão com o banco de dados realizada com sucesso! ')
// }).catch(err => {
//     console.log('Falha ao se conectar:' + err)
// });

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
}
);

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = {
    sqlz: sequelize,
    Sqlz: Sequelize
};