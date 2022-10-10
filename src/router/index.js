import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    // 路由懒加载，就是页面路由路径切换到/login，才会加载对应组件代码
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '@/views/register/RegisterView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
