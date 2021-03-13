function* hello () {
  yield 'hello'
  yield 'world'
  return 'ending'
}
var hw = hello()
console.log(hw.next(23))
console.log(hw.next(123))
console.log(hw.next())