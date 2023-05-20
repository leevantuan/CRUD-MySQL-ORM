const db = require('../models/index')
const { CreateCategory, getFindCategoryId, UpdateCategory, DeleteCategory } = require('../services/CRUDcategory')
const { getFindProductId, UpdateProduct, CreateProduct, DeleteProduct } = require('../services/CRUDproduct')

//Create category
const getCreateCategory = (req, res) => {
    return res.render('createCategory.ejs')
}
const postCreateCategory = async (req, res) => {
    let data = req.body;
    await CreateCategory(data);
    res.redirect('/API/category')
}
//Reading in CRUD
const getReadCategory = async (req, res) => {
    try {
        let data = await db.Category.findAll();
        res.render('readCategory.ejs', { data })
    } catch (e) {
        console.log(e)
    }
}
//Update in CRUD
const getUpdateCategory = async (req, res) => {

    let Id = req.params.UserId;
    let data = await getFindCategoryId(Id);
    return res.render('updateCategory.ejs', { data })
}
const postUpdateCategory = async (req, res) => {
    let data = req.body;
    await UpdateCategory(data)
    res.redirect('/API/category')
}
//Delete in CRUD
const getDeleteCategory = async (req, res) => {

    let Id = req.params.UserId;
    let data = await getFindCategoryId(Id);
    return res.render('deleteCategory.ejs', { data })
}
const postDeleteCategory = async (req, res) => {
    let id = req.body.id;
    await DeleteCategory(id)
    res.redirect('/API/category')
}


///------------------- Product
const getReadProduct = async (req, res) => {
    try {
        let data = await db.Product.findAll();
        res.render('readProduct.ejs', { data })
    } catch (e) {
        console.log(e)
    }
}
//Create
const getCreateProduct = (req, res) => {
    return res.render('createProduct.ejs')
}
const postCreateProduct = async (req, res) => {
    let data = req.body;
    await CreateProduct(data)
    res.redirect('/API/product')
}
//Update in CRUD
const getUpdateProduct = async (req, res) => {

    let Id = req.params.UserId;
    let data = await getFindProductId(Id);
    return res.render('updateProduct.ejs', { data })
}
const postUpdateProduct = async (req, res) => {
    let data = req.body;
    await UpdateProduct(data)
    res.redirect('/API/product')
}
//Delete
const getDeleteProduct = async (req, res) => {

    let Id = req.params.UserId;
    let data = await getFindProductId(Id);
    return res.render('deleteProduct.ejs', { data })
}
const postDeleteProduct = async (req, res) => {
    let id = req.body.id;
    await DeleteProduct(id)
    res.redirect('/API/product')
}
module.exports = {
    getCreateCategory, postCreateCategory, getReadCategory, getUpdateCategory, postUpdateCategory, getDeleteCategory, postDeleteCategory,
    getCreateProduct, postCreateProduct, getReadProduct, getUpdateProduct, postUpdateProduct, getDeleteProduct, postDeleteProduct
}