import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'

import store from '../store'

Vue.use(Router)

let routerMap = [
  {
    path: '/',
    redirect:'/login',
    component: Login
  },
 {
    path:'/login',
    name:'login',
    component:Login
  }
 ]

let route =  new Router({
  routes: routerMap
})

route.beforeEach((to,from,next)=>{
  console.log(store.getters.getRoles);
  console.log(to.path);
  if(store.getters.getRoles.length === 0){
    if(to.path === '/login'||to.path === '/'){
      next();
    }
    else{
      next('/login');
    }
  }
  else{
    next();
  }
})

export default route;
