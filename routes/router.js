const express = require('express');
const router = express.Router();
const main = require('../controller/MainController');

router.get('/index', main.index);
router.get('/tables', main.tables);
router.get('/charts', main.charts);
router.get('/forms', main.forms);
router.get('/login', main.login);
router.get('/register', main.register);
router.get('/forget', main.forget);
router.get('/calendar', main.calendar);
router.get('/activities', main.activities);
router.get('/todo', main.todo);

module.exports = router;