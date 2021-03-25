class Router {
  constructor ({ routes }) {
    this.history = new History()
    this.history.listen((hash) => {
      console.log(hash)
    })
  }
}

class History {
  listen (callback) {
    window.addEventListener('hashchange', function () {
      callback(window.location.hash)
    })
  }
}

Router.install = function (Vue) {
  Vue.component('router-view', {
    template: '<div>router-view</div>'
  })
}