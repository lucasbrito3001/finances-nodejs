require('module-alias/register');

const db = require('@database');
const sqlz = db.sqlz;
const Sqlz = db.Sqlz;

const Transaction = sqlz.define('transactions', {
    senderName: { type: Sqlz.STRING, allowNull: false },
    accountIdSender: { type: Sqlz.INTEGER(6).ZEROFILL, allowNull: true },
    accountIdRecipient: { type: Sqlz.INTEGER(6).ZEROFILL, allowNull: true },
    typeTransaction: { type: Sqlz.INTEGER, allowNull: false },
    amount: { type: Sqlz.FLOAT, allowNull: false },
    transactionStatus: { type: Sqlz.STRING, allowNull: false }
})

Transaction.sync({ force: false }).then(console.log('Created')).catch(err => console.log(err));

module.exports = {
    transaction: Transaction
}
