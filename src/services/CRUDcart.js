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
//order
const getAllOrders = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let order = await db.Order.findAll({
                raw: true
            })
            if (order) {
                resolve(order)
            }
        } catch (e) {
            reject(e)
        }
    })
}

//Create in CRUD
const CreateCart = async (data) => {

    let { Phone, ProductID, Size, Quantity, Status } = data;

    return new Promise(async (resolve, reject) => {
        try {
            await db.Cart.create({
                Phone: Phone,
                ProductID: ProductID,
                Size: Size,
                Quantity: Quantity,
                Status: Status
            })
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
//----------------------
const CreateOrder = async (data) => {

    let { Status, Address, Phone, Total, ListCart } = data;

    return new Promise(async (resolve, reject) => {
        try {
            await db.Order.create({
                Status: Status,
                Address: Address,
                Phone: Phone,
                Total: Total,
                ListCart: ListCart
            })
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
//Update in CRUD
const UpdateCart = async (data) => {

    let { Quantity, id } = data;

    if (Quantity <= 0) {
        return new Promise(async (resolve, reject) => {
            try {
                let cart = await db.Cart.findOne({ where: { id: id } })
                if (cart) {
                    await cart.destroy();
                }
                resolve()
            } catch (e) {
                reject(e)
            }
        })
    }
    else {
        return new Promise(async (resolve, reject) => {
            try {
                let cart = await db.Cart.findOne({ where: { id: id } })
                if (cart) {
                    await cart.update({
                        Quantity: Quantity,
                    });
                }
                resolve()
            } catch (e) {
                reject(e)
            }
        })
    }

}
//Update in CRUD
const UpdateCartStatus = async (data) => {

    let Phone = data.Phone;

    return new Promise(async (resolve, reject) => {
        try {
            let ListCarts = await db.Cart.findAll({ where: { Phone: Phone }, raw: true })

            if (ListCarts) {
                ListCarts.map(async (event) => {
                    let ListCart = await db.Cart.findOne({ where: { id: event.id } })
                    if (ListCart) {
                        ListCart.update({ Status: 0 });
                    }
                })
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
//delete cart user
const DeleteCartUser = async (data) => {
    let { id, Status } = data;
    return new Promise(async (resolve, reject) => {
        try {
            let cart = await db.Cart.findOne({ where: { id: id } })
            if (cart.Status === Status) {
                await cart.destroy();
            }
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

//Update in CRUD order
const UpdateOrder = async (data) => {

    let { Status, id } = data;
    return new Promise(async (resolve, reject) => {
        try {
            let order = await db.Order.findOne({ where: { id: id } })
            if (order) {
                await order.update({
                    Status: Status,
                });
            }
            resolve()
        } catch (e) {
            reject(e)
        }
    })

}

//Delete in CRUD
const DeleteOrder = async (Id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let order = await db.Order.findOne({ where: { id: Id } })
            if (order) {
                await order.destroy();
            }
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    CreateCart, UpdateCart, DeleteCart, getAllCarts, CreateOrder, UpdateCartStatus, getAllOrders, UpdateOrder, DeleteOrder, DeleteCartUser
}