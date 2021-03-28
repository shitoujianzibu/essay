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

function matcher (routes, path, index) {
  let paths = path.split('/')
  for (let routeName in routes) {
    let route = routes[routeName]
    if (route.path.replace(/^\//, '') === paths[index].replace(/^\//, '')) {
      if (route.children) {
        let components = matcher(route.children, path, index + 1)
        if (!components) {
          continue
        }
        return [route.component, ...components]
      } else if (index >= paths.length - 1) {
        return [route.component]
      } else {
        continue
      }
    }
  }
  return false
}

function getMatchedComponent (routes, path, matchIndex) {
  let matchRes = matcher(routes, path, 0)
  if (!matchRes) {
    return null
  }
  return {
    ...matchRes[matchIndex - 1]
  }
}

Router.install = function (Vue) {
  Vue.mixin({
    beforeCreate () {
      if (this.$options.router) { // 根组件才有
        this.$options.router.init(this)
        this.routerRoot = true
      } else {
        this.routerRoot = (this.$parent && this.$parent.routerRoot) || this
      }
    }
  })
  Vue.component('router-view', {
    functional: true,
    render (createElement, { props, children, parent, data }) {
      parent.isRouterView = true
      let depth = 1
      let searchParent = parent
      while (searchParent && searchParent.$parent && searchParent.routerRoot !== searchParent) {
        if (searchParent.isRouterView) {
          depth ++
        }
        searchParent = searchParent.$parent
      }
      const router = searchParent.$options.router
      const path = router.path.replace(/^#\//, '')
      const matchedComponent = getMatchedComponent(router.routes, path, depth)
      console.log("render -> matchedComponent", matchedComponent)
      // const matchedRoute = routes.find(route => {
      //   return route.path.replace(/^\//, '') === path.replace(/^#\//, '')
      // })
      // const matchedComponent = matchedRoute.component
      const simpleComponent = {
        template: '<div>123</div>'
      }
      let comp = {
        matchedComponent
      }
      return createElement(matchedComponent)
    }
  })
}