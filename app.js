const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

app = express();

// Passport Config
require('./config/passport')(passport);

// DB Config
const db = require('./config/keys').MongoURI;

// Connect to Mongo Atlas
mongoose.connect(db, {useNewUrlParser: true})
  .then(() => console.log('Connected to MongoAtlas in the Cloud... '))
  .catch(err => console.log(err));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//since getting data from form need to use
// Bodyparser
app.use(express.urlencoded({ extended: false}));

// Express Session Middleware
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect Flash
app.use(flash());

// Global Variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));