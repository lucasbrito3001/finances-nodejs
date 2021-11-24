const transactionsModel = require("@models/transactionsModel.js");

const transactionsController = {
    getTransactions: async function (req, res) {
        const matchedAccount = await accountsModel.account.findOne({ where: { email: req.body.email, password: req.body.password } });
    },

    createTransaction: async function (req, res) {
        await transactionsModel.transaction.create(req.body);
        return res.status(201).json({
            status: 201,
            data: [],
            message: "Transação realizada com sucesso!",
            result: "success",
            error: null
        });
    }
}

module.exports = transactionsController;