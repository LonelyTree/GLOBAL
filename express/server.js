const createError     = require('http-errors');
const express          =require('express');
const app             = express();
const cookieParser    = require('cookie-parser');
const logger          = require('morgan');
const bodyParser      = require('body-parser');
const cors            = require('cors');
const session         = require('express-session')
const methodOverride  =require('method-override')
const path            = require('path')


require('./db/db');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));

app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'build')))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cookieParser());
app.use(methodOverride('_method'))

const corsOptions = {
  origin: 'http://localhost:3000', // when you deploy your react app, this is where you put the address,
  credentials: true, // allowing cookies to be sent with requests from the client (session cookie),
  optionsSuccessStatus: 200 // some legacy browsers IE11 choke on a 204, and options requests
}

app.use(cors(corsOptions));

const backpackRouter = require('./routes/backpackCtrl.js');
const userRouter=require('./routes/userCtrl.js');
const loginRouter=require('./routes/authCtrl.js')


// app.use('/api/NASA',apiRouter);
app.use('/backpack', backpackRouter);
app.use('/users', userRouter);
app.use('/auth',loginRouter);

app.use('/*',(req,res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
