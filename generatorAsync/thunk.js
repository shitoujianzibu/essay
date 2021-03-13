const fs = require('fs')
// fs.readFile('./src/pages/generator/name.txt', (err, data) => {
//   if (!err) {
//     console.log(data)
//   } else {
//     console.log(err)
//   }
// })
var thunk = function (fileName) {
  return function (callback) {
    fs.readFile(fileName, callback)    
  }
}
// thunk('./src/pages/generator/name.txt')((err, data) => {
//   console.log(data)
// })
var Thunk = function (fn) {
  return function () {
    const args = [].slice.call(arguments)
    return function (callback) {
      args.push(callback)
      return fn.apply(this, args)
    }
  }
}
Thunk(fs.readFile)('./src/pages/generator/name.txt')((err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
  
})
