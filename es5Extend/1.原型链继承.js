// 重点是让子类的原型等于父类的实例


function Person (name) {
  this.name = name
}
Person.prototype.sayName = function () {
  console.log(this.name)
}
function Child (name) {
  this.name = name
}

Child.prototype = new Person()
let child = new Child('小明')
child.sayName()

