import Vue from 'vue'
import Vuex from './vuex.js'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    name: '小明',
    age: 18
  },
  getters: {
    getName (state) {
      return state.name + '是个好人'
    },
    getAge (state) {
      return state.name + state.age + '岁了'
    }
  },
  mutations: {
    add (state, payload) {
      state.age += payload
    }
  },
  actions: {
    
  }
})