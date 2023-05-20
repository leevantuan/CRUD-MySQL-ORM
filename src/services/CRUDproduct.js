const connection = require('../config/database');
const db = require('../models/index')

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

    let { name, price, detail, image, sale, news, category, quantity, listImgID } = data;
    return new Promise(async (resolve, reject) => {
        try {
            await db.Product.create({
                Name: name,
                Price: price,
                Detail: detail,
                Image: image,
                Sale: sale === '1' ? true : false,
                New: news === '1' ? true : false,
                Category: category,
                ListImgID: listImgID,
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

    let { name, price, detail, image, sale, news, category, quantity, listImgID, id } = data;

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
                    Category: category,
                    ListImgID: listImgID,
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
    CreateProduct, getFindProductId, UpdateProduct, DeleteProduct
}