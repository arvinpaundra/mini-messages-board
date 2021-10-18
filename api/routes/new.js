const router = require('express').Router();
const newController = require('../controllers/new.controller');

router.get('/', newController.getNewMessagePage);
router.post('/', newController.postNewMessage);

module.exports = router;
