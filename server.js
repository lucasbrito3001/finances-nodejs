require('module-alias/register');
require('dotenv').config();

const app = require('@app');

const config = require('@config');

app.listen(config.app.port, (err) => {
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    
    if(err) return console.log(err);
    console.log(`The app is running at http://localhost:${config.app.port}`);
});