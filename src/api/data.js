import axios from '../config/httpConfig'

//获取用户的历史记录
export const getUserRecords = (params) => {
    return axios.get("records", params);
}

//获取用户的单条历史记录
export const getUserSingleRecord = (parmas) => {
    return axios.get("record", parmas);
}

//获取用户月记录
export const getMonthRecord = (params) => {
    return axios.get("month/record", params);
}

//获取用户日记录
export const getDailyRecord = (params) => {
    return axios.get("daily/record", params);
}

//获取用户年记录
export const getYearRecord = (params) => {
    return axios.get("year/record", params);
}
