import servre from './service'
// 接口参数 
export function getList (url, data) {
    return servre.post(url,data)
}
