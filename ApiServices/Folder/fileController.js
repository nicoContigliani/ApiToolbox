const fileModel = require('../Folder/fileModel')
const fileDto = require('../Folder/fileDto')

const get = async (req, res) => {
    try {
        const files = await fileModel.get()
        const filesRow = await fileDto.format(files);

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(filesRow);
    } catch (error) {
        console.log("🚀 ~ file: fileController.js:11 ~ get ~ error:", error)

    }


}



module.exports = {
    get,
    // getId,
    // post,
    // put

}