const path = require('path');
const express = require('express');

const configViewEngine = (app) => {

    //config 
    app.set('views', './src/views');
    app.set('view engine', 'ejs');

    //config static files
    app.use(express.static(path.join(__dirname, '../public')))
}

module.exports = configViewEngine;