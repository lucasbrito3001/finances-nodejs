const accountsController = {
    login: function(req, res) {
        return res.json(req.body)
    },

    register: function(req, res) {
        return res.json(req.body)
    }
};

module.exports = accountsController;