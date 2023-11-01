const expess = require('express');
const morgan = require('morgan');
const compression = require('compression');

const app = expess();

// middleware
app.use(expess.json());
app.use(expess.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(compression());

// routes
app.use('/', require('./routes'));

// 404
app.use((req, res) => {
  res.status(404).json({
    message: 'Not Found'
  })
})

// error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message
  })
})

module.exports = app;