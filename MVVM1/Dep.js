let uid = 0
class Dep {
  constructor () {
    this.id = uid++
    this.subs = []
  }
  depend () {
    Dep.target.addDep(this)
  }
  addSub (sub) {
    this.subs.push(sub)
  }
  removeSub (sub) {
    const index = this.subs.findIndex(item => item.id === sub.id)
    if (index > -1) {
      this.subs.splice(index, 1)
    }
  }
  notify () {
    console.log(this.subs)
    this.subs.forEach(sub => sub.update())
  }
}
Dep.target = null