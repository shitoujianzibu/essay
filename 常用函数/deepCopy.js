function deepCopy (obj) {
  let temp = Array.isArray(obj) ? [] : {}
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object') {
        temp[key] = deepCopy(obj[key])
      } else {
        temp[key] = obj[key]
      }
    }
  }
  return temp
}
var obj = {
  name: '小明',
  age: 42,
  children: {
    name: '小红',
    age: 12
  }
}
var deepObj = deepCopy(obj)
console.log(deepObj)
