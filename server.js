const app = require('./src/app')
require('dotenv').config()

const port = process.env.PORT

app.listen(port, (err) => {
    app.get('/', (req, res) => {
        res.send('Hello World!')
    })
    
    if(err) return console.log(err);
    console.log(`The app is running at http://localhost:${port}`)
})