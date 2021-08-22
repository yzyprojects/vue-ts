import LoadFile from "./load-file.init";
const path = require('path')

export  class Files extends LoadFile {
    getFiles() {
        const files = require.context('/src/common-base/',true,/\.init.ts$/);
        return files
    }
}

const common = new Files().loadFiles();
export default common;