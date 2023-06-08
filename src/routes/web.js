const express = require('express');
const db = require('../models/index');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const { getHomePage, getDemoEjs, getCreateUsers, getUpdateUsers, postUpdateUsers, getDeleteUsers, postDeleteUsers } = require('../controllers/homeController')
const { postCreateUser } = require('../services/CRUDservices')
const { LoginWithUsers, LoginWithAdmin, AuthTokenUsers, LogoutWithUsers, RefreshWithUsers, AuthTokenAdmin } = require('../services/Login')


router.get('/', getHomePage)

router.get('/users', getDemoEjs)

// router.get('/create', getCreateUsers)

// router.get('/update/:UserId', getUpdateUsers)

// router.get('/delete/:UserId', getDeleteUsers)s


router.post('/create-users',
    body('Phone').isLength({ min: 10 }).isInt(),
    body('PassWord').isLength({ min: 8 }),
    body('Name').isLength({ max: 20 }),
    async (req, res) => {
        const errors = validationResult(req);
        const data = req.body;
        if (!errors.isEmpty()) {
            return res.status(200).json({ message: "Error phone number! Check your phone number, Please!" });
        }
        const CheckPhone = await db.User.findOne({ where: { Phone: data.Phone } })
        if (CheckPhone) {
            return res.status(200).json({ message: "Error phone number! Check your phone number, Please!" });
        }
        else {
            await postCreateUser(data);
        }
        // console.log(data)
        // console.log(Name, Phone, PassWord, RoleID)
        return res.status(200).json({ message: "success" });
    }
)

router.put('/create-users', postUpdateUsers)

router.delete('/create-users', postDeleteUsers)

router.post('/login-users', LoginWithUsers)

router.post('/check-user', AuthTokenUsers)

// router.post('/refresh-users', RefreshWithUsers)

// router.post('/logout-users', LogoutWithUsers)

router.post('/login-admin', LoginWithAdmin)

router.post('/check-admin', AuthTokenAdmin)

module.exports = router;