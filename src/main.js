import {createApp} from 'vue'
import App from './App.vue'
// 完整引入element-plus组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 使用 createApp 创建vue实例
const app = createApp(App)

// 引入组件库
app.use(ElementPlus)

// 挂载 Vue 应用
app.mount('#app')
