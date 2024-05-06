import axios from 'axios'


const request = axios.create({
    baseURL: 'http://localhost:8080',  // 将这里替换为你的服务器地址//121.199.161.167:8082
    timeout: 10000
})

request.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json;charset=utf-8';
    let token = localStorage.getItem("token");
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;  // 使用Bearer token格式
    }
    return config
}, error => {
    return Promise.reject(error)
});

request.interceptors.response.use(
    response => {
        let res = response.data;
        if (response.config.responseType === 'blob') {
            return res
        }
        if (typeof res === 'string') {
            res = res ? JSON.parse(res) : res
        }
        if (res.code === '0') {  
            console.log('request.interceptors.response返回出错了！')
        }
        return res;
    },
    error => {
        console.log('err' + error)
        return Promise.reject(error)
    }
)

export default request
