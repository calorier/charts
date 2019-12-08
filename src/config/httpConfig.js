/**
 * To create the instance of axios
 */

import axios from 'axios'
import store from '@/store/index.js'

//TODO 采用base64给参数编码

//TODO add store and token

var http = {}

//TODO set baseURL
var baseURL = ""

//设定全局headers
var headers = {
    "Content-Type": "multipart/form-data"
}
//TODO 配置拦截器

//create axios instance
const instance = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: headers
});

//GET function
http.get = function (url, params) {
    return new Promise((resolve, reject) => {
        instance.get(url, {
            params: params,
            //TODO add more config
        }).then(chunck => {
            if (chunck.code == 0) {
                console.log(chunck.message)
                reject(chunck.message)
            } else if (chunck.code == 1) {
                resolve(chunck.data)
            }
        }).catch(err => {
            console.log(err)
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
                console.log(chunck.message)
            } else if (chunck.code == 1) {
                resolve(chunck.data)
            }
        }).catch(err => {
            console.log(err)
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
                console.log(chunck.message)
            } else if (chunck.code == 1) {
                resolve(chunck.data)
            }
        }).catch(err => {
            console.log(err)
            reject("unknown error")
        })
    })
}

export default http