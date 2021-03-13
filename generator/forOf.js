function* gen () {
  yield 1
  yield 2
}
var g = gen()

console.log(g.next())
console.log(g.return(34))