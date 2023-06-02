const connection = require('../config/database');
const db = require('../models/index')

const getAllCategories = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let category = await db.Category.findAll({
                raw: true
            })
            if (category) {
                resolve(category)
            }
        } catch (e) {
            reject(e)
        }
    })
}
const getFindCategoryId = async (Id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let category = await db.Category.findOne({ where: { id: Id } })
            if (category) {
                resolve(category)
            }
        } catch (e) {
            reject(e)
        }
    })

}
//Create in CRUD
const CreateCategory = async (data) => {

    let { CategoryName, MadeIn } = data;
    return new Promise(async (resolve, reject) => {
        try {
            await db.Category.create({
                CategoryName: CategoryName,
                MadeIn: MadeIn,
            })
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
//Update in CRUD
const UpdateCategory = async (data) => {

    let { CategoryName, MadeIn, id } = data;

    return new Promise(async (resolve, reject) => {
        try {
            let category = await db.Category.findOne({ where: { id: id } })
            if (category) {
                await category.update({
                    CategoryName: CategoryName,
                    MadeIn: MadeIn
                });
            }
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
//Delete in CRUD
const DeleteCategory = async (Id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let category = await db.Category.findOne({ where: { id: Id } })
            if (category) {
                await category.destroy();
            }
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    CreateCategory, getFindCategoryId, UpdateCategory, DeleteCategory, getAllCategories
}