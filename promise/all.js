const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 1000)
})
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2)
  }, 2000)
})
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3)
  }, 3000)
})
const promiseAll = function (list) {
  
  return new Promise((resolve, reject) => {
    if (!Array.isArray(list)) {
      return reject(`${list} 必须是个数组`)
    }
    let arr = []
    let index = 0
    const len = list.length
    for (let i = 0; i < len; i++) {
      Promise.resolve(list[i]).then(result => {
        arr[i] = result
        if (++index === len) {
          resolve(arr)
        }
      })
    }
  })
}
promiseAll([promise3, promise1, promise2]).then(result => {
  console.log(result)
})