const db = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config()

// let RefreshTokens = [];

const LoginWithUsers = async (req, res) => {
    let data = req.body;

    let user = await db.User.findOne({ where: { Phone: data.Phone } })

    if (user) {
        let check = await bcrypt.compareSync(data.PassWord, user.PassWord);
        if (check) {

            let token = jwt.sign({ data: { Name: user.Name, Phone: user.Phone, PassWord: "Not Show", RoleID: "Not Show" } }, process.env.JWT_SECRET, { expiresIn: '3 days' });

            // let refreshToken = jwt.sign({ data: user }, process.env.JWT_REFRESH_SECRET, { expiresIn: '7 days' });
            // RefreshTokens.push(refreshToken);

            return res.status(200).json({
                message: "success",
                token,
                // refreshToken,
            });
        }
        else {
            return res.status(200).json({
                message: "Error password! Check your password, Please!"
            });
        }
    }

    return res.status(200).json({ message: "Error phone number! Check your phone number, Please!" });
}

const AuthTokenUsers = (req, res, next) => {
    const AuthHeader = req.headers['authorization'];
    // const AuthHeader = req.body.body.Authorization;
    // console.log(AuthHeader)
    const token = AuthHeader.split(' ')[1];
    if (!token) {
        // res.status(401);
        res.Status(200).json({ message: "Login field!" });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {

        if (err) {
            res.status(403)
        }
        else {
            // next();
            res.status(200).json({ data })
        }
    })
}


const LogoutWithUsers = async (req, res) => {
    const refreshToken = req.body.token;
    // console.log(refreshToken)
    RefreshTokens = await RefreshTokens.filter((refToken) => refToken !== refreshToken)
    res.status(200).json(RefreshTokens)
}

const RefreshWithUsers = (req, res) => {
    const refreshToken = req.body.token;
    // res.send(RefreshTokens)
    if (!refreshToken) {
        res.status(401)
    }
    else {
        const checkRefreshToken = RefreshTokens.includes(refreshToken)
        if (checkRefreshToken === false) {
            res.status(403)
        }
        else {
            jwt.verify(
                refreshToken, process.env.JWT_REFRESH_SECRET, (err, data) => {
                    // console.log(data)
                    if (err) {
                        res.status(403)
                    }
                    else {
                        const accessToken = jwt.sign({ data: { id: data.id, Name: data.Name, Phone: data.Phone } }, process.env.JWT_SECRET, { expiresIn: '60s' })
                        res.status(200).json({ accessToken })
                    }
                }
            )
        }
    }


}

//admin
const LoginWithAdmin = async (req, res) => {
    let data = req.body;

    let user = await db.User.findOne({ where: { Phone: data.Phone } })

    if (user) {
        let check = await bcrypt.compareSync(data.PassWord, user.PassWord);
        if (check) {
            if (data.RoleID === "admin") {

                let token = jwt.sign({ data: { Name: user.Name, Phone: user.Phone, PassWord: "Not Show", RoleID: "Not Show" } }, process.env.JWT_ADMIN_SECRET, { expiresIn: '1 days' });

                return res.status(200).json({
                    message: "success",
                    token,
                });
            }
            return res.status(200).json({
                message: "Error phone number or password! Check your phone number and password, Please!"
            });
        }
        else {
            return res.status(200).json({
                message: "Error phone number or password! Check your phone number and password, Please!"
            });
        }
    }
    return res.status(200).json({ message: "Error phone number or password! Check your phone number and password, Please!" });

}

const AuthTokenAdmin = (req, res, next) => {

    const AuthHeader = req.headers['authorization'];

    const token = AuthHeader.split(' ')[1];
    if (!token) {
        res.Status(200).json({ message: "Login field!" });
    }
    jwt.verify(token, process.env.JWT_ADMIN_SECRET, (err, data) => {

        if (err) {
            res.status(403)
        }
        else {
            res.status(200).json({
                data
            })
        }
    })
}

module.exports = {
    LoginWithUsers, LoginWithAdmin, AuthTokenUsers, LogoutWithUsers, RefreshWithUsers, AuthTokenAdmin
}