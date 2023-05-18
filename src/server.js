//Import express
require('dotenv').config()
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRouters = require('./routes/web');
const connection = require('./config/database')

const app = express()
//.env check
const port = process.env.PORT || 6969;
const hostname = process.env.HOST_NAME;

//config 
configViewEngine(app);

//config express.json req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })) // for form data

//Routes
app.use('/', webRouters)

app.listen(port, () => {
    console.log(`Example app listening on port http://${hostname}:${port}`)
})