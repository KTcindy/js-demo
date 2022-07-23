import Food from './food.js'
import Serpentes from './serpentes.js'
// 游戏的入口文件
class Game{
    constructor() {
        this.food = new Food();
        this.Serpentes = new Serpentes();
        this.map = map;
        this.timerId=null
    }
    start () {
        this.food.render(this.map);
        this.Serpentes.render(this.map);
        this.runSnake()
        this.bindKey()
    }
    bindKey () {
        document.addEventListener('keydown', e => {
            switch (e.keyCode) {
                case 37:
                    this.Serpentes.direction = 'left';
                    break;
                case 38:
                    this.Serpentes.direction = 'top';
                    break;
                
            }
        })
    }
}