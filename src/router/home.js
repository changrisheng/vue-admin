// 前台配置路由文件
// 前台首页
import Index from "@/veiws/home/index";

export default [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Index,
  }
];
