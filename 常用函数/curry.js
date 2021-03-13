// function add (a, b) {
//   return a + b
// }


// function curry (fn, currArgs) {
//   var len = fn.length
//   return function () {
//     let args = [].slice.call(arguments)
//     if (currArgs !== undefined) {
//       args = args.concat(currArgs)
//     }
//     if (args.length >= len) {
//       return fn.apply(this, args)
//     }
//     return curry(fn, args)
//   }
// }
// function add () {
//   const args = [...arguments]
//   let fun = function () {
//     const subArgs = args.concat([...arguments])
//     return add.apply(null, subArgs)
//   }
//   fun.toString = function () {
//     return args.reduce((a, b) => a + b)
//   }
//   return fun
// }
// const value = add(1,5, 4,5)
// console.log(value)

function compose (...args) {
  return function (...arguments) {
    const init = args[0].call(null, arguments)
    return args.slice(1).reduce((acc, curr) => {
      return curr(acc)
    }, init)

  }
}
function fn1 (a) {
  return a * a
}
function fn2 (a) {
  return a + 5
}
function fn3 (a) {
  return a - 4
}

var composeFn = compose(fn1, fn2, fn3)

console.log(composeFn(3))
