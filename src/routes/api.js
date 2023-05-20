const express = require('express');
const routerAPI = express.Router();
const {
    postCreateCategory, getCreateCategory, getReadCategory, getUpdateCategory, postUpdateCategory, getDeleteCategory, postDeleteCategory,
    getCreateProduct, postCreateProduct, getReadProduct, getUpdateProduct, postUpdateProduct, getDeleteProduct, postDeleteProduct
} = require('../controllers/APIController')

routerAPI.get('/category', getReadCategory)

routerAPI.get('/create-category', getCreateCategory)

routerAPI.get('/update-category/:UserId', getUpdateCategory)

routerAPI.get('/delete-category/:UserId', getDeleteCategory)

routerAPI.post('/create-a-category', postCreateCategory)

routerAPI.post('/update-a-category', postUpdateCategory)

routerAPI.post('/delete-a-category', postDeleteCategory)

//Product
routerAPI.get('/product', getReadProduct)

routerAPI.get('/create-product', getCreateProduct)

routerAPI.post('/create-a-product', postCreateProduct)

routerAPI.get('/update-product/:UserId', getUpdateProduct)

routerAPI.post('/update-a-product', postUpdateProduct)

routerAPI.get('/delete-product/:UserId', getDeleteProduct)

routerAPI.post('/delete-a-product', postDeleteProduct)

module.exports = routerAPI;