function object (obj) {
  function F () {}
  F.prototype = obj
  return new F()
}

var obj = {
  name: '小明'
}
var child = object(obj)
console.log(child.name)