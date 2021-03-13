function object (o) {
  function F () {}
  F.prototype = o
  return new F()
}

function Person (name) {
  this.name = name
}
Person.prototype.sayName = function () {
  console.log(this.name)
}
function Child (name) {
  Person.call(this, name)
  this.name = name
}
function inheritProperty (subType, superType) {
  var prototype = object(superType.prototype)
  prototype.constructor = subType
  subType.prototype = prototype
}
inheritProperty(Child, Person)
// Child.prototype = object(Person.prototype)
// Child.prototype.constructor = Child
var child = new Child('child')
child.sayName()