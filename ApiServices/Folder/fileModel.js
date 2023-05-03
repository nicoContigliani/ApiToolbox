const filesDao = require('./fileDao')

const get = async () => {
    return await filesDao.get()
}


module.exports = {
    get,
    // getId,

};