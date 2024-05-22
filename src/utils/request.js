import axios from 'axios'


const request = axios.create({
    baseURL: '/',  // 将这里替换为你的服务器地址//121.199.161.167:8082
    timeout: 10000
})

request.interceptors.request.use(config => {
    // config.headers['Content-Type'] = 'application/json;charset=utf-8';
    // 检查是否是文件上传请求
  if (config.data instanceof FormData) {
    // 移除Content-Type，让Axios自动设置
    if(config.headers['Content-Type']) {
        delete config.headers['Content-Type'];
    }
  } else {
    // 非文件上传请求，设置Content-Type为application/json
    config.headers['Content-Type'] = 'application/json;charset=utf-8';
  }


    let token = localStorage.getItem("Token");
    if (token) {
        // config.headers['Authorization'] = `Bearer ${token}`;  // 使用Bearer token格式
        config.headers = {
            'token': token
        };
    } else {
        console.log("token为空！")
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

        // response.withCredentials = true;

        return res;
    },
    error => {
        console.log('err' + error)
        return Promise.reject(error)
    }
)

export default request
