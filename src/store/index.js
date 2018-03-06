import Vue from 'vue'
import Vuex from 'vuex'
import Admin from '@/components/Admin'
import Home from '@/components/Home'
import Guest from '@/components/Guest'
import Super from '@/components/SuperManager'

Vue.use(Vuex)

const state = {
  roles:[],//存储用户角色
  router:[]
}

const getters = {
  getRoles: state => state.roles,
  getRouter: state => state.router
}

let addRouter = (state) => {
  let acessRouter = {
    path:'/home',
    name:'home',
    component:Home,
    children:[]
  }
  let roles = state.roles;
  let arr = [];
  if(roles.indexOf('admin') > -1){
    arr.push({
      path:'/admin',
      name:'admin',
      component:Admin
    })
  }
  if(roles.indexOf('super') > -1){
    arr.push({
      path:'/super',
      name:'super',
      component:Super
    })
  }
  if(roles.indexOf('guest') > -1){
    arr.push({
      path:'/guest',
      name:'guest',
      component:Guest
    })
  }
  acessRouter.children = arr;
  state.router = acessRouter;
}

const mutations = {
  //添加用户权限，如果存在，不添加
  addRoles(state,{roles}) {
    state.roles = [];
    roles.forEach((item)=>{
      if(state.roles.indexOf(item) === -1){
        state.roles.push(item);
      }
    })

    addRouter(state);
  }
}

const actions = {
  addRoles:({commit},{roles}) =>{
    commit('addRoles',{roles});
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
