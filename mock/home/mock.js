// 引入mockjs
const Mock = require('mockjs');
// mock一组数据
const productData = () => {
    const data = Mock.mock({
        "rc": 0,
        "list|1-50": [{
            "key|+1": 1,
            "name": "@cname",
            "age|15-17": 15,
            "score|40-100": 100,
            "address": "@county(true)",
        }],
    });
    return data;
}
Mock.mock('/xsps/discharge/whole', 'get', productData);
