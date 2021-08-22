import { def } from "@vue/shared";
import FirstLetterUppercase from "./first-letter-uppercase.init";
import LoadFile from "./load-file.init";
const path = require('path')


export  class Files extends LoadFile {
    getFiles() {
        const files = require.context('/src/common/',true,/\.init.ts$/);
        return files
    }
}

const common = new Files().loadFiles();
console.log('=====common:', common)
export default common;