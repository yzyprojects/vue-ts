const path = require('path')
import Base from "./base"


export default class LoadFile {
    private base;
    constructor () {
        this.base = new Base();
    }
    
    // 动态加载vuex moudes 模块文件
    loadFiles() {
        const files = require.context('/src/views', true, /(ms-).*\.ts$/);
        const modules:any = {};
        files.keys().forEach(key => {
            const names = path.basename(key, '.ts').split("-");
            let lastName =  this.base.ucfirst(names[1]);
            console.log();
            let name = '';
            if (lastName) {
                name = names[0] + lastName;
                modules[name] = files(key).default || files(key);
            }
        })
        return modules;
    }
}