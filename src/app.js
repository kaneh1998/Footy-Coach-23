const express = require('express');     // Import express dependency
const app = express();                  // Instantiate express app, main work horse of this server
const bodyParser = require('body-parser');
require('dotenv').config();
const exphbs = require('express-handlebars');
const multer = require('multer');
const upload = multer();
const port = 3000;                      // Port number we are opening
const path = require('path');
const session = require('express-session');
const loginRoutes = require('../routes/loginRoutes');
const SQLiteStore = require('connect-sqlite3')(session);
const mongoose = require('mongoose');

const uri = `mongodb+srv://kane:${process.env.MONGODB_KEY}@cluster0.ypzmt.mongodb.net/AFL23?retryWrites=true&w=majority`;

mongoose.connect(uri).then(() => console.log("Connected to DB")).catch((err) => console.log(err));

//! Middleware
app.use(session({
    store: new SQLiteStore,
    secret: process.env.SECRETKEY,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // 1 day
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..')));

//! Routes
app.use(loginRoutes);

//! Handlebars
app.engine('handlebars', exphbs.engine({
    helpers: require('../view/helpers/helpers')
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '../view'));

//! Routing
app.get("/", async (req, res) => {
    res.render('home', {
        title: 'Footy Coach 2023',
        logged: req.session.loggedIn,
        username: req.session.username,
        home: true
    });
    return;
});

app.listen(process.env.PORT || port, function () {
    return console.log(`Express is listening at http://localhost:${port}`);
});