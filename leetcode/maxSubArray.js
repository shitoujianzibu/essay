var maxSubArray = function (arr) {
  var res = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > 0) {
      arr[i] += arr[i - 1]
    }
    res = Math.max(res, arr[i])
  }
  return res
}

var arr = [1,2,3,-3,-5,7,3,-1]
var result = maxSubArray(arr)
console.log(result)