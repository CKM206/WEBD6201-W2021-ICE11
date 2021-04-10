// importing 3rd party modules
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';

// Authentication Modules
import session from 'express-session';
import passport from 'passport';
import passportLocal from 'passport-local';

// Authentication Objects
let localStrategy = passportLocal.Strategy; // Alias
import User from '../Models/user';

// Authentication Messaging Module & Error Management
import flash from 'connect-flash';

// App configuration
import indexRouter from '../Routes/index';
import contactListRouter from '../Routes/contact-list';
const app = express();
export default app;

// DB configuration
import * as DBConfig from './db';
mongoose.connect(DBConfig.RemoteURI, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`Connected to MongoDB at: ${DBConfig.Host}`);
});


// Setup View Engine
app.set('views', path.join(__dirname, '../Views/'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client/')));
app.use(express.static(path.join(__dirname, '../../node_modules/')));

// Setup Express Session
app.use(session({
  secret: DBConfig.Secret,
  saveUninitialized: false,
  resave: false
}));

// Initialize Flash
app.use(flash());

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Implement an Auth Strategy (Local Strategy)
passport.use(User.createStrategy());

// Serialize and Deserialize User Data
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Router Config
import {AuthGuard} from '../Util/index';  // Import AuthGuard Function
app.use('/', indexRouter);
app.use('/contact-list', AuthGuard, contactListRouter); // Protect ALL routes in the Contact-list Router

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err:createError.HttpError, req:express.Request, res:express.Response, next:express.NextFunction) {
  // set locals, only providing error in development

  let message = err.message;
  let error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {message: message, error:error, title: '', page: '', displayName: ''});
});

//module.exports = app;
