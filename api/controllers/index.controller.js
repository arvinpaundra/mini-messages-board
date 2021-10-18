const { loadData } = require('../data/messages');

module.exports = (req, res) => {
  const messages = loadData();

  res.render('./index', {
    layout: './main.ejs',
    title: 'Messages Board',
    messages,
  });
};
