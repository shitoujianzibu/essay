function indexOf(arr, target, start, end) {
  start = start || 0
  end = end || arr.length - 1
  if (start > end) {
    return -1
  }
  let middle = Math.floor((start + end) / 2)
  // console.log(middle)
  if (arr[middle] > target) {
    end = middle - 1
    return indexOf(arr, target, start, end)
  } else if (arr[middle] < target) {
    start = middle + 1
    return indexOf(arr, target, start, end)
  } else {
    return middle
  }
}


let a = [0, 1, 2, 3, 4, 5, 6, 434, 435];

console.log(indexOf(a, 7))