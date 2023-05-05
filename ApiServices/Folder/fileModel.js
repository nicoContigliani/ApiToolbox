const filesDao = require('./fileDao')

const get = async () => {
    return await filesDao.get()
}
const getId = async () => {
    return await filesDao.getId()
}



module.exports = {
    get,
    getId,

};