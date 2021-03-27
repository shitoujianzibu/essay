// 递归求1 加到100
function add (a, b) {
  var num = a + b
  if (b + 1 > 100) {
    return num
  }
  return add (num, b + 1)
}

var total = add(1, 2)
console.log(total)