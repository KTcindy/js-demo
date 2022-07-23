import { checkArray } from './common/array'
Vue.directive('display-key', {  //一般是做到按钮权限
    inserted (el, binding) {
        let displapKey = binding.value;
        if (displapKey) {
            let hasIfKey = checkArray(displapKey)
            if (!hasIfKey) {
                el.parentNode && el.parentNode.removeChild(el)
            }
        } else {
            throw new Error('参数错误')
        }
    }
})