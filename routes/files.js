const express = require('express');
const router = express.Router();
const files = require('../ApiServices/Folder/fileRouters')

require('dotenv').config();
// console.log(process.env.TOKEN)



router.use('/', files);



module.exports = router;