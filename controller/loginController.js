// const helper = require('../utils/helper');

const loginGet = ("/login", (req, res) => {
    res.render('login', {
        title: 'BarBox | Login',
        logged: req.session.loggedIn,
        username: req.session.username
    });
});

module.exports = {
    loginGet
}