require('module-alias/register');
require('dotenv').config()

const app = require('@app');

const config = require('./src/config/index')

app.listen(config.port, (err) => {
    app.get('/', (req, res) => {
        res.send('Hello World!')
    })
    
    if(err) return console.log(err);
    console.log(`The app is running at http://localhost:${config.port}`)
})