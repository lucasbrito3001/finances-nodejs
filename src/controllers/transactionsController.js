const transactionsModel = require("@models/transactionsModel.js");
const { Op } = require('sequelize');

const transactionsController = {
    getTransactions: async function (req, res) {
        try {
            const matchedTransactions = await transactionsModel.transaction.findAll({
                where: {
                    [Op.or]: [
                        { accountIdSender: req.query.accountId },
                        { accountIdRecipient: req.query.accountId }
                    ]
                }
            });
            return res.status(200).json({
                status: 200,
                data: matchedTransactions,
                message: `Foram encontradas ${matchedTransactions.length} transações.`,
                result: "success",
                error: null
            });
        } catch (error) {
            return res.status(404).json({
                status: 404,
                data: [],
                message: `Nenhuma transação encontrada.`,
                result: "empty",
                error: null
            });
        }
    },

    createTransaction: async function (req, res) {
        let status = 201;
        let data = [];
        let message = "Pedido de transação realizado!";
        let result = "success";
        let error = null;
        try {
            let payload = req.body;
            payload.transactionStatus = (req.body.typeTransaction === 1 || req.body.typeTransaction === 3) ? "pending" : "completed";
            await transactionsModel.transaction.create(payload);
        } catch (err) {
            status = 400;
            err.errors.forEach(item => {
                data.push({ error: item.type, message: item.message })
            });
            message = "Houve um erro ao criar o pedido de transação!";
            result = "error";
            error = err.name;
        }
        return res.status(status).json({
            status: status,
            data: data,
            message: message,
            result: result,
            error: error
        });
    },

    completeTransaction: async function (req, res) {
        let status = 200;
        let data = [];
        let message = "Transação confirmada!";
        let result = "success";
        let error = null;

        try {
            const itemToUpdate = await transactionsModel.transaction.findOne({ where: { id: req.query.transactionId} });
            if(itemToUpdate.typeTransaction !== 1 && (req.query.confirmerId != itemToUpdate.accountIdSender)) throw {message: "Possível fraude identificada", error: 'id of confirmer is wrong'};
            if(itemToUpdate.transactionStatus !== 'pending') throw {message: "O status desta transação ja foi decidido.", error: 'transaction already completed'}

            itemToUpdate.transactionStatus = "completed";
            await itemToUpdate.save();
        } catch (err) {
            status = 400;
            data = [];
            message = err.message || "Este id de transação não existe";
            result = "error";
            error = err.error || "invalid id";
        }
        
        return res.status(status).json({
            status: status,
            data: data,
            message: message,
            result: result,
            error: error
        });
    }
}

module.exports = transactionsController;