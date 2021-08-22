/**
 * 计算器
 * 使用vuex module方式实现计算器加减操作
 * 加法 
 * 减法
 */
 export default class Calculator {
    constructor() {

    }

    // 加法
    addNumber (state:any) {
        setTimeout(function () {
            state.number ++;
        }, 1000)
    }
    
    // 减法
    minus (state:any) {
        state.number --;
    }

}