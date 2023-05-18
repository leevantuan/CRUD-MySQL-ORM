const express = require('express');
const router = express.Router();
const { getHomePage, getDemoEjs, postCreateUsers, getCreateUsers, getUpdateUsers, postUpdateUsers, getDeleteUsers, postDeleteUsers } = require('../controllers/homeController')

router.get('/', getHomePage)

router.get('/ejs', getDemoEjs)

router.get('/create', getCreateUsers)

router.get('/update/:UserId', getUpdateUsers)

router.get('/delete/:UserId', getDeleteUsers)

router.post('/create-users', postCreateUsers)

router.post('/update-users', postUpdateUsers)

router.post('/delete-users', postDeleteUsers)


module.exports = router;