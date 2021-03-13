function SetManager (name) {
  this.name = name
}
SetManager.prototype.getName = function () {
  console.log('manager: ' + this.name)
}

let getManager = (function () {
  var manager = null
  return function (name) {
    if (!manager) {
      manager = new SetManager(name)
    }
    return manager
  }
})()
function getSingleton (fn) {
  let instance = null
  return function () {
    if (!instance) {
      instance = fn.apply(this, arguments)
    }
    return instance
  }
}
var m = getSingleton(function (name) {
  manager = new SetManager(name)
  return manager
})
m('a').getName()
m('b').getName()
m('c').getName()