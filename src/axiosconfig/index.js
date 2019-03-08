import axios from 'axios';
// import qs from 'qs';
import config from './config';

/* 检查http返回的status状态 */
const checkStatus = (response) => {
    const state = response.status;
    if (state === 200 || state === 304) {
        return response.data;
    }
    return console.error('请求失败');
};

/* 检查response.data.code的状态码 */
const checkCode = (data) => {
    if (data.rc === 0) {
        return { data };
    }
    return console.error('状态码错误');
};
/*
 * get: get请求
 * post: post请求
 * postfile: 文件上传
 */
export default {
    get(url) {
        return axios({
            url,
            method: 'get',
            timeout: config.timeout,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
        })
            .then(checkStatus)
            .then(checkCode);
    },
    post(url, data) {
        return axios({
            url,
            method: 'post',
            data,
            timeout: config.timeout,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json; charset=UTF-8',
            },
        })
            .then(checkStatus)
            .then(checkCode);
    },
    postfile(url, data) {
        return axios({
            url,
            method: 'post',
            data,
            timeout: config.timeout,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'multipart/form-data;',
            },
        })
            .then(checkStatus)
            .then(checkCode);
    },
};
