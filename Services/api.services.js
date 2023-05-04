const axios = require('axios')
require('dotenv').config()



const Api = async ({
    url,
    body,
    params,
    method,
    token
}) => {
    // console.log("🚀 ~ file: api.services.js:13 ~ params:", params)

    const headers = {
        'Accept': 'application/json'
    };
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    
    const urls = await
    (params != null || params !== undefined)
    ? `${url}/${params}`
    : `${url}`;

    try {
        const datas = await axios({
            method: method,
            url: urls,
            data: body,
            headers: headers
        });


        return datas
    } catch (error) {

    }




}

module.exports = {
    Api
}