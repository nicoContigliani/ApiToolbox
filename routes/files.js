const express = require('express');
const router = express.Router();
const files = require('../ApiServices/Folder/fileRouters')
const filesServer = require('../ApiServices/FolserServer/fileServerRouters')

require('dotenv').config();
// console.log(process.env.TOKEN)



router.use('/data', files);

router.use('/list', filesServer)



module.exports = router;