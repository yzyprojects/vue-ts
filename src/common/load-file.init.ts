const path = require('path')
import FirstLetterUppercase from "./first-letter-uppercase.init"

export default class LoadFile {
    firstLetterUppercase;
    constructor () {
        this.firstLetterUppercase = new FirstLetterUppercase();
    }
    getFiles() {
        const files = require.context('/src/views',true,/(ms-).*\.ts$/);
        return files
    }
    
    // 动态加载vuex moudes 模块文件
    // loadFiles(a:any) {
    //     const files = this.getFiles()
    //     const modules:any = {};
    //     files.keys().forEach(key => {
    //         const names = path.basename(key, '.ts').split("-");
    //         let lastName =  this.firstLetterUppercase.ucfirst(names[1]);
    //         console.log();
    //         let name = '';
    //         if (lastName) {
    //             name = names[0] + lastName;
    //             modules[name] = files(key).default || files(key);
    //         }
    //     })
    //     return modules;
    // }

    loadFiles() {
        const files = this.getFiles()
        const modules:any = {};
        files.keys().forEach(key => {
            const names = path.basename(key, '.ts').split("-");
            let lastName:string = ''
            names.forEach((element:any, index:number) => {
                lastName +=  this.firstLetterUppercase.ucfirst(element.replace('.init', ''));
            });
            let name = '';
            if (lastName) {
                console.log('===lastName:', lastName)
                name = names[0] + lastName;
                modules[lastName] = files(key).default || files(key);
            }
        })
        return modules;
    }
}