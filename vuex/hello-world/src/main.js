import Vue from 'vue'
import App from './App.vue'
import store from './store.js'

Vue.config.productionTip = false

new Vue({
  name: 'main',
  render: h => h(App),
  store,
}).$mount('#app')
