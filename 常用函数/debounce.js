function debounce (fn, wait = 200) {
  let timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(fn, wait)
  }
}
function calc () {
  console.log('计算')
}
var debounceCalc = debounce(calc)
debounceCalc()
debounceCalc()
debounceCalc()
debounceCalc()
debounceCalc()
debounceCalc()
debounceCalc()
debounceCalc()