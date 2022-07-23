import getList from './common.js'
export function postList (url,data) {
    return new Promise((resolve,reject) => {
        getList(url, data).then(res => resolve(res))
        .catch(error => reject(error))
    })
}