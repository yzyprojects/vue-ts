import { createStore } from 'vuex'
import LoadFile from '../common/load-file'
const lf = new LoadFile()
const modules = lf.loadFiles()

export default createStore({
  modules
})
