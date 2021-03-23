function myInstanceof (child, parent) {
  let proto = child.__proto__
  let prototype = parent.prototype
  while (true) {
    if (proto === null) {
      return false
    }
    if (proto === prototype) {
      return true
    }
    proto = proto.__proto__
  }
}

function Person () {

}
var p = new Person()

console.log(myInstanceof(p, Person))
