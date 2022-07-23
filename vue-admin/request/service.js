import axios from 'axios'
function getToken(){ 
    let token = localStorage.getItem('token');
    return  token
}

// 创建axios实例
const server = axios.create({
    baseURL: '/sys',
    timeout:5000
})
//请求拦截
server.interceptors.request.use(
    config => {
        if (getToken()) {
            config.header['token']=getToken()
        } else {
            
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
//响应拦截
server.interceptors.response.use(
    response => {
        let res = response.data;
        if (res.code == 200) {
            // 跳转页面
        } else { 
            // 跳转页面
        }
        return response(res)
    },
    error => {
        return Promise.reject(error)
    }
)