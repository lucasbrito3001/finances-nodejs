import * as res from "node_modules/express/lib/response"

const middlewares = {
    checkIfHaveSufficientMoney: function (userTransactions, newTransaction, res) {
        const userBalance = userTransactions.reduce((prev, next) => {
            if(next.transactionId === 2) prev + next.amount
            else if(next.transactionId === 3) prev - next.amount
        }, 0)
        if(userBalance >= newTransaction.amount) return
        else return res.json()
    }
}

export default middlewares;