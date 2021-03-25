class Router {
  constructor ({ routes }) {
    this.routes = routes
    this.history = new History()
    this.history.listen(path => {
      this.path = path
    })
  }
  init (vm) {
    this.vm = vm
  }
}

class History {
  listen (callback) {
    window.addEventListener('hashchange', function () {
      callback && callback(window.location.hash)
    })
  }
}

Router.install = function (Vue) {
  Vue.mixin({
    beforeCreate () {
      if (this.$options.router) { // 根组件才有
        this.$options.router.init(this)
      }
    }
  })
  Vue.component('router-view', {
    functional: true,
    render (createElement, { props, children, parent, data }) {
      let comp = {
        template: '<div>我是router-view</div>'
      }
      return createElement(comp)
    }
  })
}