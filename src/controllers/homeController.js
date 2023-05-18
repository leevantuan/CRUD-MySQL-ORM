const connection = require('../config/database')
const db = require('../models/index')
const { getAllUsers, getFindUserId, postCreateUser, postUpdateUser, postDeleteUser } = require('../services/CRUDservices')

const getCreateUsers = (req, res) => {

    return res.render('createUsers.ejs')
}

const getUpdateUsers = async (req, res) => {

    let Id = req.params.UserId;

    let data = await getFindUserId(Id);

    data = data && data.length > 0 ? data[0] : {}

    return res.render('updateUsers.ejs', { data })
}

const getDeleteUsers = async (req, res) => {

    let Id = req.params.UserId;

    let data = await getFindUserId(Id);

    data = data && data.length > 0 ? data[0] : {}

    return res.render('deleteUsers.ejs', { data })
}

const getDemoEjs = async (req, res) => {

    let [results, fields] = await connection.query('SELECT * FROM Users')

    res.send(JSON.stringify(results))

}
//Reading in CRUD
const getHomePage = async (req, res) => {
    let data = await getAllUsers();
    // data = JSON.stringify(data)
    return res.render('home.ejs', { data })
}
//Create in CRUD
const postCreateUsers = async (req, res) => {
    let data = req.body;
    await postCreateUser(data);
    res.redirect('/')
    //Promise async await
    //connection basic
    // with placeholder
    // connection.query(
    //     ` INSERT INTO Users ( Email, Name , City ) VALUES (?, ?, ?) `,
    //     [email, name, city],
    //     function (err, results) {
    //         console.log(results);
    //         res.send("Create users succeed!")
    //     }
    // );
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