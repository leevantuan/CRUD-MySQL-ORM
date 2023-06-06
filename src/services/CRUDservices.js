const connection = require('../config/database');
const db = require('../models/index');
const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(10);

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
// hash pass
//let check = await bcrypt.compareSync(password, user.password);
let hashUserPassword = (password) => {
    //nếu tốt thì sẽ chạy (réolve) còn không sẽ bị từ chối (reject) js
    return new Promise(async (resolve, reject) => {
        try {
            const hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
        // Store hash in your password DB.
    });
};
//Create in CRUD
const postCreateUser = async (data) => {

    let { Name, Phone, PassWord, RoleID } = data;
    let HashPassWord = await hashUserPassword(PassWord);
    return new Promise(async (resolve, reject) => {
        try {
            await db.User.create({
                Name: Name,
                Phone: Phone,
                PassWord: HashPassWord,
                RoleID: RoleID
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

    let { Name, Phone, PassWord, RoleID, id } = data;

    return new Promise(async (resolve, reject) => {
        try {
            let HashPassWord = await hashUserPassword(PassWord);
            let user = await db.User.findOne({ where: { id: id } })
            if (user) {
                await user.update({
                    Name: Name,
                    Phone: Phone,
                    PassWord: HashPassWord,
                    RoleID: RoleID
                });
            }
            // console.log(user)
            resolve()
        } catch (e) {
            reject(e)
        }
    })
    // console.log(Name, Phone, PassWord, RoleID, id)
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