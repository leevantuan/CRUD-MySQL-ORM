const connection = require('../config/database')
const db = require('../models/index')
const { getAllUsers, getFindUserId, postCreateUser, postUpdateUser, postDeleteUser } = require('../services/CRUDservices')

const getCreateUsers = (req, res) => {
    return res.render('createUsers.ejs')
}

const getUpdateUsers = async (req, res) => {

    let Id = req.params.UserId;
    let data = await getFindUserId(Id);
    // data = data && data.length > 0 ? data[0] : {}
    return res.render('updateUsers.ejs', { data })
}

const getDeleteUsers = async (req, res) => {

    let Id = req.params.UserId;
    let data = await getFindUserId(Id);
    // data = data && data.length > 0 ? data[0] : {}
    return res.render('deleteUsers.ejs', { data })
}

const getDemoEjs = async (req, res) => {
    try {
        let data = await getAllUsers();
        res.send(JSON.stringify(data))
    } catch (e) {
        console.log(e)
    }
}
//Reading in CRUD
const getHomePage = async (req, res) => {
    try {
        let data = await getAllUsers();
        res.render('home.ejs', { data })
    } catch (e) {
        console.log(e)
    }
}
//Create in CRUD
const postCreateUsers = async (req, res) => {
    let data = req.body;
    await postCreateUser(data);
    res.redirect('/')
}
//Update in CRUD
const postUpdateUsers = async (req, res) => {
    let data = req.body;
    await postUpdateUser(data)
    res.redirect('/')
}
//Delete in CRUD
const postDeleteUsers = async (req, res) => {
    let id = req.body.id;
    await postDeleteUser(id)
    res.redirect('/')
}

module.exports = {
    getHomePage, getDemoEjs, postCreateUsers, getCreateUsers, getUpdateUsers, postUpdateUsers, getDeleteUsers, postDeleteUsers
}