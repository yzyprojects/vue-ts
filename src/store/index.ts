import { createStore } from 'vuex'
import C from '../common/index'
const lf = new C.LoadFile()
const modules = lf.loadFiles()

export default createStore({
  modules
})
