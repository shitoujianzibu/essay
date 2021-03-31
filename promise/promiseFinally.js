Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value => P.resolve(callback()).then(() => value),
    error => P.resolve(callback()).then(() => { throw error })
  )
};

var p = new Promise((resolve, reject) => {
  reject(1)
})

p
.then(value => {
  console.log(value)
}, reason => {
  console.log(reason, '---')
})
.finally(value => {
  console.log('000')
})