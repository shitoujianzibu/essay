
var firstUniqChar = function(s) {
    var map = new Map()
    for (let str of s) {
        if (!map.has(str)) {
            map.set(str, 1)
        } else {
            map.set(str, map.get(str) + 1)
        }
    }
    console.log(map)
    for (let i of map) {
      if (i[1] === 1) {
        return i[0]
      }
    }
    return ' '
};

console.log(firstUniqChar('loveleetcode'))