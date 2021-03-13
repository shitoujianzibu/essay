const { resolve } = require('path')


function co (it) {
  return new Promise((resolve, reject) => {
    function next (data) {
      let { value, done } = it.next(data)
      if (!done) {
        Promise.resolve(value).then(data => {
          next(data)
        })
      } else {
        resolve(data)
      }
    }
    next()
  })
}

const fs = require('fs').promises
function* read () {
  try {
    const age = yield fs.readFile('./src/pages/generator/name.txt', 'utf-8')
    const value = yield fs.readFile(`./src/pages/generator/${age}`, 'utf-8')
    return value
  } catch (e) {

  }
}
let it = read()
co(read()).then(data => {
  console.log(data)
})
// const { value, done } = it.next()
// Promise.resolve(value).then(data => {
//   let { value, done } = it.next(data)
//   Promise.resolve(value).then(data => {
//     let { value, done } = it.next(data)
//     console.log(value)
//   })
// })