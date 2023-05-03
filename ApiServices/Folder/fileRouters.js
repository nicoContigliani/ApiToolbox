const express = require('express');
const router = express.Router();
const file = require('./fileController');

router.get('/', file.get);



module.exports = router;