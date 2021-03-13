class MVVM {
  constructor (options) {
    this.$options = options || {}
    this._data =  this.$options.data
    this.el = this.$options.el
    Object.keys(this._data).forEach((key) => {
      this.proxyData(key)
    })
    observe(this._data, this)
    this.$compile = new Compile(this.el, this)
  }
  proxyData (key, setter, getter) {
    setter = setter ||
    Object.defineProperty(this, key, {
      enumerable: true,
      configurable: false,
      get () {
        console.log(this)
        return this._data[key]
      },
      set (val) {
        this._data[key] = val
      }
    })
  }
}