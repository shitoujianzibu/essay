// 时间戳
function throttle (fn, wait) {
  var prev = Date.now()
  return function () {
    var now = Date.now()
    if (now - prev >= wait) {
      fn.apply(this, arguments)
      prev = now
    }
  }
}
function fn () {
  console.log(123)
}
var throttleFn = throttle(fn, 2000)
var index = 0
var timer = null
function start () {
  timer = setInterval(() => {
    if (index++ > 100) {
      clearInterval(timer)
    }
    throttleFn()
  }, 100)
}
start()