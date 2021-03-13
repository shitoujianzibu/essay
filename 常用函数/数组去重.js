var arr = [1, 23, 3, 4, 5, 6, 6, 2, 3, 3, 4, ]
function unique (arr) {
  let tempArr = []
  let map = {}
  for (let i = 0; i < arr.length; i ++) {
    if (!map[arr[i]]) {
      tempArr.push(arr[i])
      map[arr[i]] = true
    }
  }
  return tempArr.sort((a, b) => a - b)
}



console.log(unique(arr))