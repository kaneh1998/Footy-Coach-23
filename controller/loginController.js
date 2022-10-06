// const helper = require('../utils/helper');

const loginGet = ("/login", (req, res) => {
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

module.exports = {
    loginGet
}