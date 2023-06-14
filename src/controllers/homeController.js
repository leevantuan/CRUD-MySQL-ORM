const connection = require('../config/database')
const db = require('../models/index')

const { getAllUsers, postUpdateUser, postDeleteUser } = require('../services/CRUDservices')

const getDemoEjs = async (req, res) => {
    let data = await getAllUsers();
    return res.status(200).json({
        data
    });
}
const getHomePage = async (req, res) => {
}
const postUpdateUsers = async (req, res) => {
    let data = req.body;
    await postUpdateUser(data)
    res.send("Update success!")
}
const postDeleteUsers = async (req, res) => {
    let id = req.body.id;
    await postDeleteUser(id)
    res.send("Delete success!")
}

module.exports = {
    getHomePage, getDemoEjs, postUpdateUsers, postDeleteUsers
}