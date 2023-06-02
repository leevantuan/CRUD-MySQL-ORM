const express = require('express');
const routerAPI = express.Router();
const {
    postCreateCategory, getCreateCategory, getReadCategory, getUpdateCategory, postUpdateCategory, getDeleteCategory, postDeleteCategory, getCategories,
    getCreateProduct, postCreateProduct, getReadProduct, getUpdateProduct, postUpdateProduct, getDeleteProduct, postDeleteProduct, getProducts,
    getCreateImage, postCreateImage, getReadImage, getUpdateImage, postUpdateImage, getDeleteImage, postDeleteImage, getImages,
} = require('../controllers/APIController')


//category
routerAPI.get('/categories', getCategories)

routerAPI.get('/category', getReadCategory)

routerAPI.get('/create-category', getCreateCategory)

routerAPI.get('/update-category/:UserId', getUpdateCategory)

routerAPI.get('/delete-category/:UserId', getDeleteCategory)

routerAPI.post('/create-a-category', postCreateCategory)

routerAPI.post('/update-a-category', postUpdateCategory)

routerAPI.post('/delete-a-category', postDeleteCategory)

//Product
routerAPI.get('/products', getProducts)

routerAPI.get('/product', getReadProduct)

routerAPI.get('/create-product', getCreateProduct)

routerAPI.post('/create-a-product', postCreateProduct)

routerAPI.get('/update-product/:UserId', getUpdateProduct)

routerAPI.post('/update-a-product', postUpdateProduct)

routerAPI.get('/delete-product/:UserId', getDeleteProduct)

routerAPI.post('/delete-a-product', postDeleteProduct)

//Image
routerAPI.get('/images', getImages)

routerAPI.get('/image', getReadImage)

routerAPI.get('/create-image', getCreateImage)

routerAPI.post('/create-a-image', postCreateImage)

routerAPI.get('/update-image/:UserId', getUpdateImage)

routerAPI.post('/update-a-image', postUpdateImage)

routerAPI.get('/delete-image/:UserId', getDeleteImage)

routerAPI.post('/delete-a-image', postDeleteImage)
module.exports = routerAPI;