const connection = require('../config/database');
const db = require('../models/index')

const getAllImages = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let img = await db.Image.findAll({
                raw: true
            })
            if (img) {
                resolve(img)
            }
        } catch (e) {
            reject(e)
        }
    })
}
const getFindImageId = async (Id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let img = await db.Image.findOne({ where: { CategoryId: Id } })
            if (img) {
                resolve(img)
            }
        } catch (e) {
            reject(e)
        }
    })

}
//Create in CRUD
const CreateImage = async (data) => {

    let { ImageLink, ProductId } = data;
    return new Promise(async (resolve, reject) => {
        try {
            await db.Image.create({
                ImageLink: ImageLink,
                ProductId: ProductId,
            })
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
//Update in CRUD
const UpdateImage = async (data) => {

    let { ImageLink, ProductId, id } = data;

    return new Promise(async (resolve, reject) => {
        try {
            let img = await db.Image.findOne({ where: { id: id } })
            if (img) {
                await img.update({
                    ImageLink: ImageLink,
                    ProductId: ProductId,
                });
            }
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
//Delete in CRUD
const DeleteImage = async (Id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let img = await db.Image.findOne({ where: { id: Id } })
            if (img) {
                await img.destroy();
            }
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    CreateImage, getFindImageId, UpdateImage, DeleteImage, getAllImages
}