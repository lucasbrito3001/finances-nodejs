const middlewares = {
    checkIfHaveSufficientMoney: function (userTransactions, req, res) {
        if(req.body.typeTransaction === 1 || req.body.typeTransaction === 4) return true
        else {
            const userBalance = userTransactions.reduce((prev, next) => {
                if(next.transactionStatus == 'completed') {
                    if(next.accountIdSender == req.query.accountId) return prev - next.amount
                    else return prev + next.amount
                }
            }, 0)
            console.log(userBalance)
            if(userBalance >= req.body.amount) return true;
            else return false;
        }
    }
}

module.exports = middlewares;