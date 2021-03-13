import Vue from 'vue'
import Vuex from './vuex.js'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    name: '小明'
  },
  getters: {
    getName (state) {
      return state.name + '是个好人'
    }
  },
  mutations: {
  },
  actions: {
    
  }
})