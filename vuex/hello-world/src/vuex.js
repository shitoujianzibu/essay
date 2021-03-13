let Vue

class Store {
  constructor (options) {
    console.log(options)
    this.state = options.state
    console.log(this.state)
  }
}
const install =  (_Vue) => {
  console.log('install')
  Vue = _Vue
  Vue.mixin({
    beforeCreate () {
      console.log(this.$options)
      if (this.$options && this.$options.store) { // 如果是main.js
        this.$store = this.$options.store
      } else {
        // 如果不是根组件 也把$store 挂到上面 因为是树状组件所以采用这种方式
        this.$store = this.$parent && this.$parent.$store
        // 这样每个组件都能取到 $store
      }
    }
  }) 
}

export default {
  Store,
  install
}