const express = require('express');
const router = express.Router();
const files = require('../ApiServices/Folder/fileRouters')

require('dotenv').config();
// console.log(process.env.TOKEN)


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


router.use('/', files);



module.exports = router;