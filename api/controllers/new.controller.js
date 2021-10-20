const { addMessage } = require('../data/messages');
const { DateTime } = require('luxon');

const postNewMessage = (req, res, next) => {
  const dt = DateTime.now();
  const data = {
    user: req.body.user,
    title: req.body.title,
    text: req.body.text,
    added: dt.toLocaleString(DateTime.DATETIME_SHORT),
  };

  const messages = addMessage(data);
  console.log(messages);
  res.redirect('/home');
  next();
};

const getNewMessagePage = (req, res) => {
  res.render('new', {
    layout: 'main.ejs',
    title: 'Send a Message',
  });
};

module.exports = { postNewMessage, getNewMessagePage };
