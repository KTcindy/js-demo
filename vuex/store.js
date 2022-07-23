state: {
    age: 10
}
// mutation 更改state状态 他是同步修改 如果是异步修改 在严格模式下会报错
mutation: {
    function syncChang(state, payload){
        state.age = payload
    }
}
// actions 异步更新state 最终还是走的 mutation 之所以异步操作放在actions 是为了更好追踪state的变化
actions: {
    function asyncChange({ commit }, payload){
         setTimeout(() => {
             commit('syncChang', payload)
         }, 1000)
     }
 }