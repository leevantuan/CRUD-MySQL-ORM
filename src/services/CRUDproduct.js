const connection = require('../config/database');
const db = require('../models/index')

const getAllProducts = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let product = await db.Product.findAll({
                raw: true
            })
            if (product) {
                resolve(product)
            }
        } catch (e) {
            reject(e)
        }
    })
}
const getFindProductId = async (Id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let product = await db.Product.findOne({ where: { id: Id } })
            if (product) {
                resolve(product)
            }
        } catch (e) {
            reject(e)
        }
    })

}
//Create in CRUD
const CreateProduct = async (data) => {

    let name = data.Name;
    let price = data.Price;
    let detail = data.Detail;
    let image = data.Image;
    let sale = data.Sale;
    let news = data.New;
    let category = data.CategoryId;
    let quantity = data.Quantity;
    return new Promise(async (resolve, reject) => {
        try {
            await db.Product.create({
                Name: name,
                Price: price,
                Detail: detail,
                Image: image,
                Sale: sale === '1' ? true : false,
                New: news === '1' ? true : false,
                CategoryId: category,
                Quantity: quantity,
            })
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
//Update in CRUD
const UpdateProduct = async (data) => {

    let name = data.Name;
    let price = data.Price;
    let detail = data.Detail;
    let image = data.Image;
    let sale = data.Sale;
    let news = data.New;
    let category = data.CategoryId;
    let quantity = data.Quantity;
    let id = data.id;

    return new Promise(async (resolve, reject) => {
        try {
            let product = await db.Product.findOne({ where: { id: id } })
            if (product) {
                await product.update({
                    Name: name,
                    Price: price,
                    Detail: detail,
                    Image: image,
                    Sale: sale === '1' ? true : false,
                    New: news === '1' ? true : false,
                    CategoryId: category,
                    Quantity: quantity,
                });
            }
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
//Delete in CRUD
const DeleteProduct = async (Id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let product = await db.Product.findOne({ where: { id: Id } })
            if (product) {
                await product.destroy();
            }
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    CreateProduct, getFindProductId, UpdateProduct, DeleteProduct, getAllProducts
}