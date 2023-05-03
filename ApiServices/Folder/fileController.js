const fileModel = require('../Folder/fileModel')
const fileDto = require('../Folder/fileDto')

const get = async (req, res) => {
    console.log("estoy en file controller")
    const files = await fileModel.get()
    console.log("🚀 ~ file: fileController.js:6 ~ get ~ files:", files)


}



module.exports = {
    get,
    // getId,
    // post,
    // put

}