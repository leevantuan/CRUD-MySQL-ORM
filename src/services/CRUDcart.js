const connection = require('../config/database');
const db = require('../models/index')

const getAllCarts = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let cart = await db.Cart.findAll({
                raw: true
            })
            if (cart) {
                resolve(cart)
            }
        } catch (e) {
            reject(e)
        }
    })
}

//Create in CRUD
const CreateCart = async (data) => {

    let { UserID, ProductID, Size } = data;

    // let CheckProduct = await db.Cart.findOne({ where: { ProductID: ProductID } })

    // if (CheckProduct) {
    //     return res.status(200).json({ message: "The product is already in the cart!" })
    // }
    return new Promise(async (resolve, reject) => {
        try {
            await db.Cart.create({
                UserID: UserID,
                ProductID: ProductID,
                Size: Size,
            })
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
//Update in CRUD
const UpdateCart = async (data) => {

    let { UserID, ProductID, Size, id } = data;

    return new Promise(async (resolve, reject) => {
        try {
            let cart = await db.Cart.findOne({ where: { id: id } })
            if (cart) {
                await cart.update({
                    UserID: UserID,
                    ProductID: ProductID,
                    Size: Size,
                });
            }
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
//Delete in CRUD
const DeleteCart = async (Id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let cart = await db.Cart.findOne({ where: { id: Id } })
            if (cart) {
                await cart.destroy();
            }
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    CreateCart, UpdateCart, DeleteCart, getAllCarts
}