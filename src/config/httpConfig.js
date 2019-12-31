/**
 * To create the instance of axios
 */

import axios from 'axios'

//TODO 采用base64给参数编码

//TODO add store and token

const http = {}

//TODO set baseURL
const baseURL = "http://192.68.43.28:3000/calorier/apis/v1/"

//设定全局headers
var headers = {
    "Content-Type": "multipart/form-data"
}
//TODO 配置拦截器

//create axios instance
var instance = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: headers,
    validateStatus(status) {
        switch (status) {
            case 404:
                this.$router.push("/404")
                break

        }
        return status >= 200 && status < 300
    }
});

//GET function
http.get = function (url, params) {
    window.console.log(`params is ${params}`)
    return new Promise((resolve, reject) => {
        instance.get(url, {
            params: params,
            //TODO add more config
        }).then(chunck => {
            if (chunck.data.code == 0) {
                reject(chunck.data.message)
            } else if (chunck.data.code == 1) {
                resolve(chunck.data.data)
            }
        }).catch(err => {
            alert(`========== err ${err}`);
            //window.console.log(err)
            reject("unknown error")
        })
    })
}
//POST function
http.post = function (url, data) {
    return new Promise((resolve, reject) => {
        instance.post(url, {
            data: data,
            //TODO add more config
        }).then(chunck => {
            if (chunck.code == 0) {
                reject(chunck.message)
                window.console.log(chunck.message)
            } else if (chunck.code == 1) {
                resolve(chunck.data)
            }
        }).catch(err => {
            window.console.log(err)
            reject("unknown error")
        })
    })
}

//PATCH function
http.patch = function (url, data) {
    return new Promise((resolve, reject) => {
        instance.patch(url, {
            data: data,
            //TODO add more config
        }).then(chunck => {
            if (chunck.code == 0) {
                reject(chunck.message)
                window.console.log(chunck.message)
            } else if (chunck.code == 1) {
                resolve(chunck.data)
            }
        }).catch(err => {
            window.console.log(err)
            reject("unknown error")
        })
    })
}

export default http