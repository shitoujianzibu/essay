function quickSort (arr) {
  if (arr.length <= 1) {
    return arr
  }
  var pivotIndex = Math.floor(arr.length / 2)
  var pivot = arr.splice(pivotIndex, 1)[0]
  var left = []
  var right = []
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}

let arr = [1,2,3,5,2,4,5,6,7,9,7,5,3,2,1,3,4,5,65,6,7]

console.log(quickSort(arr))
