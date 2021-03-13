function Person (name) {
  this.name = name
}
function Child (name) {
  Person.call(this, name)
}
var person = new Person('person')
var child = new Child('child')
console.log(child.name)