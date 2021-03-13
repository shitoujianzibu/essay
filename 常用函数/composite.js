function add (a, b) {
  return a + b
}
function square(a) {
  return a * a
}
function plusOne (c) {
  return c + 1
}
function composite (...args) {
  return function (...arguments) {
    const init = args[0].apply(null, arguments)
    return args.slice(1).reduce((accumulator, currentValue) => {
      return currentValue(accumulator)
    }, init)
  }

}
var addSquareAndPlusOne = composite(add, square, plusOne)

console.log(addSquareAndPlusOne(1, 4))
