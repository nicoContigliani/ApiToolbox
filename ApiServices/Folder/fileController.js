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
const getId = async (req, res) => {
    const filter = req.params;
    try {
        const files = await fileModel.getId()
        const filesRow = await fileDto.formatFilter(files, filter);
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