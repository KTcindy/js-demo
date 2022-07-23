let Vue;
class Store{

}
const install = (_Val) => { //Vue的构造函数
    Vue = _Val;
    // 只从当前的根实列开始  所有根实列的子组件才有$store方法
    Vue.mixin({  //组件的创建过程是先父后子
        beforeCreate () {
            //把父组件的store属性 放到每个组件的实列上
            // new Vue({
            //     el: '#app',
            //     store,
            //     render: h => h(App),
            //   });
            // 1、判断哪个是根组件 我们可以通过this.$options判断是否有store 属性 因为main.js  创建实列时我们把store给到了vue实列 所以默认的根组件 肯定就是main.js了

            if (this.$options.store) {
                // 根实例
            } else {
                // 非根实列
            }
        }
    })
}
export default {
    Store,
    install
}