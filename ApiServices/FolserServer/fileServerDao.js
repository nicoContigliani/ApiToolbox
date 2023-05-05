const { Api } = require('../../Services/api.services')

const get = async () => {
    const todo = {
        url: "https://echo-serv.tbxnet.com/v1/secret/files",
        body: "",
        params: "",
        method: "get",
        token: "aSuperSecretKey"
    }

    const dataReturn = await Api(todo)
    const { data } = dataReturn
    return data;
}


module.exports = {
    get,
    // getId,
};