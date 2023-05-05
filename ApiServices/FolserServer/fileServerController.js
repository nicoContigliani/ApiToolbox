const fileServerModel = require('../FolserServer/fileServerModel')
const fileServerDto = require('../FolserServer/fileServerDto')

const get = async (req, res) => {
    try {
        const files = await fileServerModel.get()
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(files);
    } catch (error) {
        console.log("🚀 ~ file: fileController.js:11 ~ get ~ error:", error)

    }


}
const getId = async (req, res) => {
    const filter = req.params;
    try {
        const files = await fileServerModel.getId()
        const filesRow = await fileServerDto.formatFilter(files,filter);
        return res.status(200).json({
            data: filesRow,
            status: 200,
        });

    } catch (error) {
        return res.status(500).send(error.message);

    }
}


module.exports = {
    get,
    getId,
    // post,
    // put

}