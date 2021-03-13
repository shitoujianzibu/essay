class Compile {
  constructor (el, vm) {
    this.$el = this.isElementNode(el) ? el : document.querySelector(el)
    this.$vm = vm
    if (this.$el) {
      this.$fragment = this.node2Fragment(this.$el)
      this.init()
      this.$el.appendChild(this.$fragment)
    }
  }
  node2Fragment (el) {
    let fragment = document.createDocumentFragment()
    let child = null
    while (child = el.firstChild) {
      fragment.append(child)
    }
    return fragment
  }
  init () {
    this.compileElement(this.$fragment)
  }
  compileElement (el) {
    const childNodes = el.childNodes
    ;[].slice.call(childNodes).forEach(node => {
      const text = node.textContent
      const reg = /\{\{(.*)\}\}/
      if (this.isElementNode(node)) {
        this.compile(node)
      } else if (this.isTextNode(node) && reg.test(text)) {
        this.compileText(node, RegExp.$1.trim())
      }
      if (node.childNodes && node.childNodes.length) {
        this.compileElement(node)
      }
    })
  }
  compile (node) {
    const nodeAttrs = node.attributes
    ;[].slice.call(nodeAttrs).forEach(attr => {
      const attrName = attr.name
      if (this.isDirective(attrName)) { // 如果是指令 v-
        const exp = attr.value // 方法名字
        const dir = attrName.substring(2) // on:click model text
        if (this.isEventDirective(attrName)) { // 事件指令 v-on
          compileUtil.eventHandler(node, this.$vm, exp, dir)
        } else { // 普通指令
          compileUtil[dir]  && compileUtil[dir](node, this.$vm, exp)
        }
        node.removeAttribute(attrName)
      }
    })
  }
  compileText(node, exp) {
    compileUtil.text(node, this.$vm, exp)
  }
  isDirective (attrName) {
    return attrName.indexOf('v-') > -1
  }
  isEventDirective (attrName) {
    return attrName.indexOf('v-on') > -1
  }
  isElementNode (node) {
    return node.nodeType === 1
  }
  isTextNode (node) {
    return node.nodeType === 3
  }
}
const compileUtil = {
  text: function (node, vm, exp) {
    this.bind(node, vm, exp, 'text')
  },
  html: function (node, vm, exp) {
    this.bind(node, vm, exp, 'html')
  },
  model: function (node, vm, exp) {
    this.bind(node, vm, exp, 'model')
    let value = this._getVMVal(vm, exp)
    node.addEventListener('input', (e) => {
      const newValue = e.target.value
      if (value === newValue) return
      this._setVMVal(vm, exp, newValue)
      value = newValue
    })
  },
  class: function (node, vm, exp) {
    this.bind(node, vm, exp, 'class')
  },
  bind: function (node, vm, exp, dir) {
    const undaterFn = updater[dir + 'Updater']
    undaterFn && undaterFn(node, this._getVMVal(vm, exp))
    new Watcher(vm, exp, (value, oldValue) => {
      undaterFn && undaterFn(node, value, oldValue)
    })
  },
  eventHandler: function (node, vm, exp, dir) {
    const eventType = dir.split(':')[1]
    const fn = vm.$options.methods && vm.$options.methods[exp]
    if (eventType && fn) {
      node.addEventListener(eventType, fn.bind(vm), false)
    }
  },
  _getVMVal: function (vm, exp) {
    let val = vm
    const exps = exp.split('.')
    for (let i = 0; i < exps.length; i++) {
      val = val[exps[i]]
    }
    return val
  },
  _setVMVal: function (vm, exp, value) {
    let val = vm
    exp = exp.split('.')
    exp.forEach((k, i) => {
      if (i < exp.length - 1) {
        val = val[k]
      } else {
        val[k] = value
      }
    })
  }
}
const updater = {
  textUpdater: function (node, value) {
    node.textContent = typeof value === 'undefined' ? '' : value
  },
  modelUpdater: function (node, value) {
    console.log(value, 'modelUpdater')
    node.value  = typeof value === 'undefined' ? '' : value
  },
  htmlUpdater: function (node, value) {
    node.innerHTML = typeof value === 'undefined' ? '' : value
  },
  classUpdater: function (node, value, oldValue) {
    let className = node.className
    className = className.replace(oldValue, '').replace(/\s$/, '')
    const space = className && String(value) ? ' ' : ''
    node.className = className + space + value
  }
}