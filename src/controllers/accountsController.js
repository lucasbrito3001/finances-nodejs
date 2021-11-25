const accountsModel = require("@models/accountsModel.js")


const accountsController = {
    login: async function (req, res) {
        const matchedAccount = await accountsModel.account.findOne({ where: { email: req.body.email, password: req.body.password } });
        const session = { 
            accountId: String(matchedAccount.accountId),
            name: matchedAccount.name,
            agencyId: matchedAccount.agencyId,
            phone: matchedAccount.phone
        };
        if(matchedAccount) {
            return res.status(200).json({
                status: 200,
                data: [session],
                message: "Logado com sucesso!",
                result: "success",
                error: null
            });
        } else {
            return res.status(401).json({
                status: 401,
                data: [],
                message: "e-mail e/ou senha incorrretos",
                result: "error",
                error: "don't match datas"
            });
        }
    },

    register: async function (req, res) {
        if (Object.values(req.body).every(ele => ele !== null)) {

            const alreadyHaveEmail = await accountsModel.account.findOne({ where: { email: req.body.email } });

            if (!!alreadyHaveEmail) {
                return res.status(401).json({
                    status: 401,
                    data: [],
                    message: "E-mail já cadastrado.",
                    result: "error",
                    error: "duplicate email address"
                });
            }

            try {
                await accountsModel.account.create(req.body);
                return res.status(201).json({
                    status: 201,
                    data: [],
                    message: "Registrado com sucesso!",
                    result: "success",
                    error: null
                });
            } catch (error) {
                let errors = []
                if (error.errors) {
                    error.errors.forEach(ele => {
                        errors.push({
                            type: ele.type,
                            message: ele.message
                        })
                    })
                } else if (error.original) {
                    errors.push({
                        type: error.original.code,
                        message: error.original.sqlMessage
                    })
                }
                return res.status(400).json({
                    status: 400,
                    data: errors,
                    message: "Ocorreu uma falha no registro.",
                    result: "error",
                    error: error.name
                });
            }
        } else {
            return res.status(422).json({
                status: 422,
                data: [],
                message: "É obrigatório o preenchimento de todos os campos, verifique e tente novamente.",
                result: "error",
                error: "missing informations"
            });
        }
    }
};

module.exports = accountsController;