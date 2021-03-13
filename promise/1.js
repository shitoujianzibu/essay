var promise1 = new Promise((resolve, reject) => reject())

var promise2 = promise1.then(
  null,
  function () {
    return {
      get then () {
        return 23
      }
    }
  }
)
promise2.then(() => {
  console.log('成功')
}, () => {
  console.log('拒绝')
})