const fs = require('fs');
const path = require('path');

const dataPath = path.resolve(__dirname + '/data.json');

const loadData = () => {
  const fileBuffer = fs.readFileSync(dataPath, 'utf-8');
  const messages = JSON.parse(fileBuffer);
  return messages;
};

const saveMessage = (message) => {
  fs.writeFileSync(dataPath, JSON.stringify(message));
};

const addMessage = (message) => {
  const messages = loadData();
  messages.push(message);
  saveMessage(messages);
};

module.exports = { addMessage, loadData };
