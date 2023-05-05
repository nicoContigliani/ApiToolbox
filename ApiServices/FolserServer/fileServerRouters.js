const express = require('express');
const router = express.Router();
const file = require('./fileServerController');

router.get('/', file.get);
router.get('/:fileName', file.getId);
// router.post('/', file.post);
// router.put('/:fileName', file.put);


module.exports = router;