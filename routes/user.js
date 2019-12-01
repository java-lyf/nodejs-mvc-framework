var express = require('express');
var log = require('log4js').getLogger("index");
var response = require("../support/response.js");

const router = require('../lib/router')((err, req, res) => {
    console.error(err);
    res.statusCode = 500;
    res.end(err.stack);
});
const userController = require('../controller/user');

router.use((req, res, next) => {
    console.info('New request arrived');
    next();
});

router.get('/:id', function(req, res) {
  userController.getUserById(req, res);
});

router.use((req, res, next) => {
    res.statusCode = 404;
    res.end();
});

module.exports = router;