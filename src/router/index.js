import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Admin from '@/components/Admin'
import Guest from '@/components/Guest'
import Tips from '@/components/Tips'
import $ from "jquery"

Vue.use(Router)

let routerMap = [
  {
    path: '/',
    redirect:'/login',
    component: Login,
    meta: ['admin', 'user']
  },
  {
    path:'/login',
    name:'login',
    component: Login,
    meta: ['admin', 'user']
  },
  {
    path:'/tips',
    name:'tips',
    component: Tips,
    meta: ['admin', 'user']
  },
  {
    path:'/home',
    name:'home',
    component: Home,
    redirect: '/home/guest',
    meta: ['admin', 'user'],
    children: [
      {
        path:'admin',
        name:'admin',
        component: Admin,
        meta: ['admin']
      },
      {
        path:'guest',
        name:'guest',
        component: Guest,
        meta: ['admin', 'user']
      }
    ]
  }
 ]

let route =  new Router({
  routes: routerMap
})

route.beforeEach((to, from, next) => {
  //获取用户权限信息，为空即没登录，跳转至登录页
  if (to.path === '/login') {
    next();
  } else {
    let role = route.app.$options.store.state.roles;
    if (role === '') {
      next('/login');
    } else {
      if(to.matched.every(item => item.meta.indexOf(role) > -1)) {
        next();
      } else {
        next('/tips');
      }
    }
  }
});

export default route;
