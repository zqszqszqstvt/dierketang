import axios from 'axios';

const instance= axios.create({
    // axios 的一些配置
    // 设置请求超时时间（ms）不超过1分钟
    timeout: 60000,
    // 允许跨域且携带 Cookie（或自定义头）。默认值：false
    withCredentials: true,
    headers: { 'Content-Type': 'application/json;charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest',
    }
});
instance.defaults.baseURL = 'http://localhost:9999';

export  default  instance
