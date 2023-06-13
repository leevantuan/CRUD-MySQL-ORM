const db = require('../models/index')
const { CreateCategory, getFindCategoryId, UpdateCategory, DeleteCategory, getAllCategories } = require('../services/CRUDcategory')
const { getFindProductId, UpdateProduct, CreateProduct, DeleteProduct, getAllProducts } = require('../services/CRUDproduct')
const { CreateImage, getFindImageId, UpdateImage, DeleteImage, getAllImages } = require('../services/CRUDimage')
const { CreateCart, UpdateCart, DeleteCart, getAllCarts, CreateOrder, UpdateCartStatus, getAllOrders, UpdateOrder, DeleteOrder } = require('../services/CRUDcart')

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
    // res.redirect('/API/category')
    // console.log(data)
    res.send("Create success!")
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
    // console.log(data)
    // res.redirect('/API/category')
    res.send("Update success!")
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
    // console.log(id)
    // res.redirect('/API/category')
    res.send("Delete success!")
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
    // res.redirect('/API/product')
    // console.log(data)
    res.send("Create success!")
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
    // console.log(data)
    // res.redirect('/API/product')
    res.send("Update success!")
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
    // console.log(id)
    // res.redirect('/API/product')
    res.send("Delete success!")
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
    // res.redirect('/API/image')
    // console.log(data)
    res.send("Create success!")
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
    // res.redirect('/API/image')
    // console.log(data)
    res.send("Update success!")
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
    // res.redirect('/API/image')
    // console.log(id)
    res.send("Delete success!")
}

//Cart----------------------------------------
//C
const postCreateCart = async (req, res) => {
    let data = req.body;

    let CheckPhone = await db.Cart.findAll({ where: { Phone: data.Phone }, raw: true })

    let CheckStatus = CheckPhone.filter((event) => event.Status === 1)

    let CheckProduct = CheckStatus.find((e) => e.ProductID == data.ProductID)

    if (CheckProduct) {
        return res.status(200).json({ message: "The product is already in the cart!" })
    }
    await CreateCart(data)
    // console.log(CheckProduct)
    res.send("Create success!")
}
//U
const postUpdateCart = async (req, res) => {
    let data = req.body;
    await UpdateCart(data)
    // console.log(data)
    res.send("Update success!")
}
//u status
const postUpdateCartStatus = async (req, res) => {
    let data = req.body;
    await UpdateCartStatus(data)
    // console.log(data)
    res.send("Update status success!")
}
//D
const postDeleteCart = async (req, res) => {
    let id = req.body.id;
    await DeleteCart(id)
    // console.log(id)
    res.send("Delete success!")
}
//read
const getCarts = async (req, res) => {
    let data = await getAllCarts();

    return res.status(200).json({
        data

    });
    // res.send("R success!")
}


//-------------C
const postCreateOrder = async (req, res) => {
    let data = req.body;
    await CreateOrder(data)
    console.log(data)
    res.send("Create success!")

}
// R
const getOrders = async (req, res) => {
    let data = await getAllOrders();

    return res.status(200).json({
        data

    });
    // res.send("R success!")
}
//U
const postUpdateOrder = async (req, res) => {
    let data = req.body;
    await UpdateOrder(data)
    // console.log(data)
    res.send("Update success!")
}
//D
const postDeleteOrder = async (req, res) => {
    let id = req.body.id;
    await DeleteOrder(id)
    // console.log(id)
    res.send("Delete success!")
}

module.exports = {
    getCreateCategory, postCreateCategory, getReadCategory, getUpdateCategory, postUpdateCategory, getDeleteCategory, postDeleteCategory, getCategories,
    getCreateProduct, postCreateProduct, getReadProduct, getUpdateProduct, postUpdateProduct, getDeleteProduct, postDeleteProduct, getProducts,
    getCreateImage, postCreateImage, getReadImage, getUpdateImage, postUpdateImage, getDeleteImage, postDeleteImage, getImages,
    postCreateCart, postUpdateCart, postDeleteCart, getCarts, postCreateOrder, postUpdateCartStatus, getOrders, postUpdateOrder, postDeleteOrder
}