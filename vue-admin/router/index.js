const routerList = []
//引入路由
function impoartAll (r) {
    r.keys().foreach((key) => {
        routerList.push(r(key).default)
    })
}
//动态引入
// require.context()   => 他是webpack Api中的 作用是 动态引入文件的
// 第一个参数是  路径  第二个参数  是否匹配子集文件夹  第三个参数   匹配带有routes的文件规则
impoartAll(require.context('./', false, /\.routes\.js/))

const routes = [
    ...routerList,
    {
        path: '/',
        name: 'login',
        compontent:'xxxxx'
    }
]