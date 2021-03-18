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


function compose() {
  var args = arguments;
  var start = args.length - 1;
  return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
  };
}
var addSquareAndPlusOne = composite(add, square, plusOne)
var addSquareAndPlusOne1 = compose(plusOne, square, add)

console.log(addSquareAndPlusOne(1, 4))
console.log(addSquareAndPlusOne1(1, 4))
