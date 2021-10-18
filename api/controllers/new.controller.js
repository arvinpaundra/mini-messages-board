const { addMessage } = require('../data/messages');

const postNewMessage = (req, res, next) => {
  const data = {
    user: req.body.user,
    title: req.body.title,
    text: req.body.text,
    added: new Date().toLocaleString(),
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
