function Observer () {
  this.obs = []
}
Observer.prototype.add = function (ob) {
  this.obs.push(ob)
}
Observer.prototype.update = function () {
  this.obs.forEach(ob => ob())
}
Observer.prototype.remove = function (target) {
  this.obs = this.obs.filter(ob => ob !== target)
}
function sayName () {
  console.log('小明')
}
function sayAge () {
  console.log(12)
}
let o = new Observer()
o.add(sayName)
o.add(sayAge)
// o.remove(sayName)
o.update()