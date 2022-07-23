export function getRandow (a, b) {  //生成随机数
    let max = Math.max(a,b)
    let min = Math.min(a, b)
    return parseInt(Math.random() * (max - min)) + min;
}