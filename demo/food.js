import { getRandow } from './utils/index';
// 食物类
 export default class Food {
    //构造器  => 数据初始化
    constructor({x=0,y=0,w=20,h=20,color='Pink'}={}) {
        //数据初始化
        //存储器
        this.elements = []

        this.x = x,
        this.y = y,
        this.w = w,
        this.h = h,
        this.color=color
    }
    //生成食物 渲染函数
    render (map) {
        this.remove() //删除之前创建的元素
        // map 地图的宽度 或高度 通过地图宽度 去除以当前食物的宽度 得到地图的格子数量 
        // x和 y的坐标
        this.x=getRandow(0,map.offsetWidth/this.w-10)*this.w
        this.y=getRandow(0,map.offsetHeight/this.h-1)*this.h

        // 创建一个元素
        let div = document.createElement('div')
        // 创建的元素append到 父容器中map
        map.apppendChild(div)
        // 在把创建的元素存储起来
        this.elements.push(div);

        // 设置样式
        div.style.position = "absolute";
        div.style.left = this.x + 'px';
        div.style.top = this.y + 'px';
        div.style.width = this.w + 'px';
        div.style.height = this.h + 'px';
        div.style.background = this.color;
    }
    //移除食物函数
    remove () {
        //从小到大
        for (let i = this.elements.length - 1; i >= 0; i--){
            // 删除dom 删除的时候只能通过父元素删除
            this.elements[i].parentNode.removeChild(this.elements[i])
            //删除数组中的元素
            this.elements.splice(i,1)
        }
    }
}
export default Food