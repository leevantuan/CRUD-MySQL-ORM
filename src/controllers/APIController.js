const db = require('../models/index')
const { CreateCategory, getFindCategoryId, UpdateCategory, DeleteCategory, getAllCategories } = require('../services/CRUDcategory')
const { getFindProductId, UpdateProduct, CreateProduct, DeleteProduct, getAllProducts } = require('../services/CRUDproduct')
const { CreateImage, getFindImageId, UpdateImage, DeleteImage, getAllImages } = require('../services/CRUDimage')

const getCategories = async (req, res) => {

    let data = await getAllCategories();
    return res.status(200).json({
        data

    });
}
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
        if (data) {
            res.render('readCategory.ejs', { data })
        }
        else {
            res.send('No data for table Category!')
        }
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
//read
const getProducts = async (req, res) => {
    let data = await getAllProducts();

    return res.status(200).json({
        data

    });
}
const getReadProduct = async (req, res) => {
    try {
        let data = await db.Product.findAll();
        res.render('readProduct.ejs', { data })
    } catch (e) {
        console.log(e)
    }
}
//Create
const getCreateProduct = async (req, res) => {
    let data = await getAllCategories();
    return res.render('createProduct.ejs', { data })
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
    let category = await getAllCategories();
    return res.render('updateProduct.ejs', { data, category })
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
///IMAGE ---------------------------------------
//read
const getImages = async (req, res) => {
    let data = await getAllImages();

    return res.status(200).json({
        data

    });
}
const getReadImage = async (req, res) => {
    try {
        let data = await db.Image.findAll();
        // res.render('readProduct.ejs', { data })
        res.send("Reading Image")
    } catch (e) {
        console.log(e)
    }
}
//Create
const getCreateImage = async (req, res) => {
    // let data = await getAllCategories();
    // return res.render('createProduct.ejs')
    res.send("Create Image")
}
const postCreateImage = async (req, res) => {
    let data = req.body;
    await CreateImage(data)
    res.redirect('/API/image')
}
//Update in CRUD
const getUpdateImage = async (req, res) => {

    // let Id = req.params.UserId;
    // let data = await getFindImageId(Id);
    // return res.render('updateProduct.ejs', { data })
    res.send("Update Img")
}
const postUpdateImage = async (req, res) => {
    let data = req.body;
    await UpdateImage(data)
    res.redirect('/API/image')
}
//Delete
const getDeleteImage = async (req, res) => {

    let Id = req.params.UserId;
    let data = await getFindImageId(Id);
    return res.render('deleteProduct.ejs', { data })
}
const postDeleteImage = async (req, res) => {
    let id = req.body.id;
    await DeleteImage(id)
    res.redirect('/API/image')
}

module.exports = {
    getCreateCategory, postCreateCategory, getReadCategory, getUpdateCategory, postUpdateCategory, getDeleteCategory, postDeleteCategory, getCategories,
    getCreateProduct, postCreateProduct, getReadProduct, getUpdateProduct, postUpdateProduct, getDeleteProduct, postDeleteProduct, getProducts,
    getCreateImage, postCreateImage, getReadImage, getUpdateImage, postUpdateImage, getDeleteImage, postDeleteImage, getImages,
}