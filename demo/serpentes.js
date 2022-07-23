export default class Serpentes {
    constructor({ w = 20, h = 20, direction = 'right' } = {}) {
        // 存储蛇
        this.elements = []

        this.w = w,
            this.h = h,
            this.direction = direction,  //direction 蛇当前移动的父向
            // 蛇的身体初始化（蛇节） 第一个元素是蛇头
            this.body = [
                { x: 3, y: 2, color: 'red' },
                { x: 2, y: 2, color: 'pink' },
                { x: 1, y: 2, color: 'pink' }
            ]
    }
    redner (map) {
        this.remove();
        this.body.map((item, i) => {
            let obj = item
            let div = document.createElement('div')
            map.apppendChild(div);
            this.elements.push(div)

            div.style.position = "absolute";
            div.style.width = this.w + 'px';
            div.style.height = this.h + 'px';
            div.style.left = obj.x * this.w + 'px';
            div.style.top = obj.y + this.h + 'px';
            div.style.background = obj.color;
        })
    }
    remove () {
        //从小到大
        for (let i = this.elements.length - 1; i >= 0; i--) {
            // 删除dom 删除的时候只能通过父元素删除
            this.elements[i].parentNode.removeChild(this.elements[i])
            //删除数组中的元素
            this.elements.splice(i, 1)
        }
    }
    //移动
    move (food, map) {
        for (let i = this.body.length - 1; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x
            this.body[i].y = this.body[i - 1].y
        }
        // 获取蛇头
        let head = this.body[0];
        //蛇移动的方向
        switch (this.direction) {
            case 'right':
                head.x += 1;
                break;
            case 'left':
                head.x -= 1;
                break;
            case 'top':
                head.y -= 1;
                break;
            case 'bottom':
                head.y += 1;
                break;
        }
        let headX = head.x * this.width;
        let headY = head.y * this.height;
        if (headX === food.x && headY === food.y) {
            let last = this.body[this.bode.length - 1];
            this.body.push({
                x: last.x,
                y: last.y,
                color:last.color
            })
            food.redner(map)
        }
    }
}