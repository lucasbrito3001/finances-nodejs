import * as res from "node_modules/express/lib/response"

const middlewares = {
    checkIfHaveSufficientMoney: function (userTransactions, newTransaction, res) {
        const userBalance = userTransactions.reduce((prev, next) => {
            if(next.transactionId === 2) prev + next.amount
            else if(next.transactionId === 3) prev - next.amount
        }, 0)
        if(userBalance >= newTransaction.amount) return
        else return res.status(406).json({
            status: 406,
            data: [],
            message: "Você não tem saldo suficiente para realizar esta transação",
            result: 'error',
            error: "user don't have money to make this transaction"
        });
    }
}

export default middlewares;