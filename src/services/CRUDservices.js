const connection = require('../config/database');
const db = require('../models/index')

const getFindUserId = async (Id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({ where: { id: Id } })
            if (user) {
                resolve(user)
            }
        } catch (e) {
            reject(e)
        }
    })

}
//Create in CRUD
const postCreateUser = async (data) => {

    let { name, email } = data;
    return new Promise(async (resolve, reject) => {
        try {
            await db.User.create({
                Name: name,
                Email: email,
            })
            resolve()
        } catch (e) {
            reject(e)
        }
    })

}
//Read in CRUD
const getAllUsers = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.User.findAll({
                raw: true
            });
            resolve(data)
        } catch (e) {
            reject(e)
        }
    })
}
//Update in CRUD
const postUpdateUser = async (data) => {

    let { name, email, id } = data;

    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({ where: { id: id } })
            if (user) {
                await user.update({
                    Name: name,
                    Email: email
                });
            }
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
//Delete in CRUD
const postDeleteUser = async (Id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({ where: { id: Id } })
            if (user) {
                await user.destroy();
            }
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    getAllUsers, getFindUserId,
    postCreateUser, postUpdateUser, postDeleteUser
}