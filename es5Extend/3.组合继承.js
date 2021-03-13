
function Person (name) {
  this.name = name
}
Person.prototype.sayName = function () {
  console.log(this.name)
}

function Child (name) {
  Person.call(this, name)
}
Child.prototype = new Person()
Child.prototype.constructor = Child
var child = new Child('child')
child.sayName()