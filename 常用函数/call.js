Function.prototype.myCall = function (obj) {
  const args = [...arguments].slice(1)
  obj.fn = this
  let result = obj.fn(args)
  delete obj.fn
  return result
}
const name = '1'
function sayName () {
  console.log(this.name)
}
const obj = {
  name: '2'
}
sayName.myCall(obj)
