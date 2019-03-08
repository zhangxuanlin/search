import axios from '../axiosconfig/index';
// import fetch from '../utils/request';
// import axios from 'axios';

export default {
    getTableList() {
        return axios.get('/xsps/discharge/whole');
    },
};
//  const getStation = () => axios.get('/xsps/branching/station');
//  const getLine = () => axios.get('/xsps/branching/line');
//  axios.all([getStation(), getLine()])
//      .then((axios.spread((acct, perms) => { // 参数分别返回接口返回的数据
//          console.log(acct, perms, '并发数据');
//      })));
