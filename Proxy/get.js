// var obj = {
//   name: 'xiaoming'
// }
// var proxy = new Proxy(obj, {
//   get: function (target, propKey) {
//     console.log(propKey)
//     return target[propKey]
//   }
// })
// console.log(proxy.name)
let proxy = new Proxy({}, {
  get: function (target, propKey, receiver) {
    console.log('GET', propKey)
    return target[propKey]
  }
})
let obj = Object.create(proxy)
obj.name