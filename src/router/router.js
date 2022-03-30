// 路由配置整合前后端路由引入
import {createRouter, createWebHistory} from 'vue-router'

import adminRouter from './admin'
import homeRouter from './home'

const baseRoutes = [];
// 合并路由
const routes = baseRoutes.concat(adminRouter, homeRouter);

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
