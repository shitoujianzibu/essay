function* Fun () {
  this.a = 1
  yield this.b = 2
  yield this.c = 3
}

var F = function () {
  return Fun.call(Fun.prototype)
}
var f = new F()

console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(f.a)
console.log(f.b)
console.log(f.c)