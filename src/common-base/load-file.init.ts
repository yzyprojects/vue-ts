const path = require('path')
import FirstLetterUppercase from "./first-letter-uppercase.init"

export default class LoadFile {
    firstLetterUppercase;
    constructor () {
        this.firstLetterUppercase = new FirstLetterUppercase();
    }

    // 获取vuex 模块文件
    getFiles() {
        const files = require.context('/src/views', true, /(ms-).*\.ts$/);
        return files
    }

    // 设置模块名称
    setModuleName (names:Array<string>) {
        let moduleName:string = ''
        names.forEach((element:string, index:number) => {
            moduleName +=  this.firstLetterUppercase.ucfirst(element.replace('.init', ''));
        });
        return moduleName;
    }


    // 导出vuex模块
    loadFiles() {
        const files = this.getFiles()
        const modules:any = {};
        files.keys().forEach(key => {
            const names = path.basename(key, '.ts').split("-");
            let moduleName:string = this.setModuleName(names)
            if (moduleName) {
                modules[moduleName] = files(key).default || files(key);
            }
        })
        return modules;
    }
}