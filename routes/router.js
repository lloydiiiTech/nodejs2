const express = require('express');
const router = express.Router();
const main = require('../controller/MainController');

router.get('/', main.index);
router.get('/address', main.address);
router.get('/contact', main.contact);
router.get('/fullname', main.fullname);
router.get('/moreinfo', main.moreinfo);


module.exports = router;