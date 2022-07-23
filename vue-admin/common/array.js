export function checkArray (key) {
    //假设后端返回的权限kode
    let arr = ['1', '2', '3']
    let index = arr.includes(key)
    if (index) return true
    else return false
}