import axios from '../config/httpConfig'

//获取用户的历史记录
export const getUserRecords=(params)=>{
    return axios.get("records",params);
}

//获取用户的单条历史记录
export const getUserSingleRecord=(parmas)=>{
    return axios.get("record",parmas);
}
