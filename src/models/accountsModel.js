require('module-alias/register');

const db = require('@database');
const sqlz = db.sqlz;
const Sqlz = db.Sqlz;

const Account = sqlz.define('accounts', {
    name: { type: Sqlz.STRING, allowNull: false },
    email: { type: Sqlz.STRING, allowNull: false },
    password: { type: Sqlz.STRING, allowNull: false },
    phone: { type: Sqlz.STRING, allowNull: false },
    accountId: { type: Sqlz.INTEGER(6).ZEROFILL, primaryKey: true, autoIncrement: true },
    agencyId: { type: Sqlz.INTEGER(4).ZEROFILL, allowNull: false }
})

Account.sync({ force: true }).then(console.log('The table was created!')).catch(err => console.log(err));

module.exports = {
    account: Account
}
