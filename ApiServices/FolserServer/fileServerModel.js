const filesServerDao = require('./fileServerDao')

const get = async () => {
    return await filesServerDao.get()
}
const getId = async () => {
    return await filesServerDao.getId()
}

module.exports = {
    get,
    getId,

};