require('module-alias/register');

const db = require('@database');
const sqlz = db.sqlz;
const Sqlz = db.Sqlz;

const Transaction = sqlz.define('transactions', {
    accountIdSender: { type: Sqlz.INTEGER(6).ZEROFILL },
    accountIdRecipient: { type: Sqlz.INTEGER(6).ZEROFILL },
    typeTransaction: { type: Sqlz.INTEGER },
    amount: { type: Sqlz.FLOAT }
})

Transaction.sync({ force: true }).then(console.log('Created')).catch(err => console.log(err));

module.exports = {
    transaction: Transaction
}
