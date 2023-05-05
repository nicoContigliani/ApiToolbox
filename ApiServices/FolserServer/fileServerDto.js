const { Api } = require("../../Services/api.services");
const { validatorStructure } = require("../../Services/validation.services");

const format = async (data) => {
    const { files } = data;
    let dataReturn
    const todoReturn = []

    for (let index = 0; index < files.length; index++) {
        const element = files[index];
        const todo = {
            url: "https://echo-serv.tbxnet.com/v1/secret/file",
            body: "",
            params: element,
            method: "get",
            token: "aSuperSecretKey",
        }
        const returnData = await Api(todo)
        if (returnData?.data === undefined) break


        const si = await validatorStructure(returnData)

        if (si.length != 0) {
            todoReturn.push({
                "file": element,
                "lineas": si
            })
        }

    }

    //   console.log("🚀 ~ file: fileDto.js:8 ~ format ~ todoReturn:", todoReturn)
     return todoReturn


}



module.exports = {
    format,
    // formatFilter
};