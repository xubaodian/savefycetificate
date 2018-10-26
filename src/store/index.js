import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  //存储用户权限信息，初始时为空
  roles: ''
}

const getters = {
  getRoles: state => state.roles,
}

const mutations = {
  //添加用户权限，如果存在，不添加
  addRoles(state,{roles}) {
    state.roles = roles;
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
