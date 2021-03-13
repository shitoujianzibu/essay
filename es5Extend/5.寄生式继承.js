function object (obj) {
  function F () {}
  F.prototype = obj
  return new F()
}

function subObject (obj) {
  var sub = object(obj)
  sub.sayHi = function () {
    console.log(this.name)
  }
  return sub
}
var person = {
  name: 'person'
}
var child = subObject(person)
child.sayHi()