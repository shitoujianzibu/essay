class Router {
  constructor ({ routes }) {
    this.routes = routes
    this.history = new History()
    this.path = window.location.hash
    this.history.listen(path => {
      this.path = path
      this.vm.$forceUpdate()
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
      const router = parent.$options.router
      const routes = router.routes
      const path = router.path
      const matchedRoute = routes.find(route => {
        return route.path.replace(/^\//, '') === path.replace(/^#\//, '')
      })
      const matchedRouteComponent = matchedRoute.component
      let comp = {
        matchedRouteComponent
      }
      return createElement(matchedRouteComponent)
    }
  })
}