import {createApp} from 'vue'
import App from './App.vue'
// 完整引入element-plus组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入路由文件
import route from './router/router'
// 使用 createApp 创建vue实例
const app = createApp(App)
  .use(route)
  .use(ElementPlus);
// 挂载 Vue 应用
app.mount('#app')
