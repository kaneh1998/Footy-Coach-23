// const helper = require('../utils/helper');
const mongoose = require('mongoose');
const User = require('../model/User');

const loginGet = ("/login", async (req, res) => {

    const user = await User.create({ name: "admin", password: "admin" });
    await user.save();

    res.render('login', {
        title: 'Footy Coach | Login',
        logged: req.session.loggedIn,
        username: req.session.username
    });
    return;
});

const registerPost = ("/api/v1/register", (req, res) => {

    //? Take in rego form details
    //? Hash password
    //? Store in DB



});

const loginPost = ("/api/v1/auth", (req, res) => {

    console.log(req.body);

});

module.exports = {
    loginGet,
    loginPost
}