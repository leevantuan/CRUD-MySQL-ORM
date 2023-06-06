const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const { getHomePage, getDemoEjs, getCreateUsers, getUpdateUsers, postUpdateUsers, getDeleteUsers, postDeleteUsers } = require('../controllers/homeController')
const { postCreateUser } = require('../services/CRUDservices')


router.get('/', getHomePage)

router.get('/users', getDemoEjs)

// router.get('/create', getCreateUsers)

// router.get('/update/:UserId', getUpdateUsers)

// router.get('/delete/:UserId', getDeleteUsers)


router.post('/create-users',
    body('Phone').isLength({ min: 10 }).isInt(),
    body('PassWord').isLength({ min: 8 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const data = req.body;
        await postCreateUser(data);
        // console.log(Name, Phone, PassWord, RoleID)
        res.send("Create success!")
    }
)

router.put('/create-users', postUpdateUsers)

router.delete('/create-users', postDeleteUsers)


module.exports = router;