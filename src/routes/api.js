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

// routerAPI.get('/create-category', getCreateCategory)

// routerAPI.get('/update-category/:UserId', getUpdateCategory)

// routerAPI.get('/delete-category/:UserId', getDeleteCategory)

routerAPI.post('/create-a-category', postCreateCategory)

routerAPI.put('/create-a-category', postUpdateCategory)

routerAPI.delete('/create-a-category', postDeleteCategory)

//Product
routerAPI.get('/products', getProducts)

routerAPI.get('/product', getReadProduct)

// routerAPI.get('/create-product', getCreateProduct)

// routerAPI.get('/update-product/:UserId', getUpdateProduct)

// routerAPI.get('/delete-product/:UserId', getDeleteProduct)

routerAPI.post('/create-a-product', postCreateProduct)

routerAPI.put('/create-a-product', postUpdateProduct)

routerAPI.delete('/create-a-product', postDeleteProduct)

//Image
routerAPI.get('/images', getImages)

routerAPI.get('/image', getReadImage)

// routerAPI.get('/create-image', getCreateImage)

// routerAPI.get('/update-image/:UserId', getUpdateImage)

// routerAPI.get('/delete-image/:UserId', getDeleteImage)

routerAPI.post('/create-a-image', postCreateImage)

routerAPI.put('/create-a-image', postUpdateImage)

routerAPI.delete('/create-a-image', postDeleteImage)
module.exports = routerAPI;