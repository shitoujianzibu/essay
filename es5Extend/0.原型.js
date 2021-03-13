function Person (name, age) {
  this.name = name
  this.age = age
}
var person1 = new Person('小明', 12)

Person.prototype = {
  constructor: Person,
  sayName: function () {
    console.log(this.name)
  }
}
person1.sayName()