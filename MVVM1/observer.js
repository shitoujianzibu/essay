class Observer {
  constructor (data) {
    this.data = data
    this.walk(data)
  }
  walk (data) {
    Object.keys(data).forEach(key => {
      this.convert(key, data[key])
    })
  }
  convert (key, value) {
    this.defineReactive(this.data, key, value)
  }
  defineReactive (data, key, value) {
    const dep = new Dep()
    observe(value)
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: false,
      get () {
        if (Dep.target) {
          dep.depend()
        }
        return value
      },
      set (newValue) {
        if (newValue === value) return
        value = newValue
        observe(newValue)
        dep.notify()
      }
    })
  }
}
function observe (value, vm) {
  if (!value || typeof value !== 'object') return
  return new Observer(value)
}