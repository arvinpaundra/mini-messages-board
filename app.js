const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const app = express();

// import routes
const index = require('./api/routes/index');
const newMessage = require('./api/routes/new');

// set up the ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('views', path.resolve(__dirname + '/api/views'));

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes part
app.get('/', (req, res) => {
  res.redirect('/home');
});
app.use('/home', index);
app.use('/new', newMessage);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});
