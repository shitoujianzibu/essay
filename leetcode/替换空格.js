var replaceSpace = function(s) {
  s = s.split('')
  let spaceCount = 0
  let oldLength = s.length
  for (let i = 0; i < oldLength; i ++) {
    if (s[i] === ' ') {
      spaceCount++
    }
  }
  s.length += spaceCount * 2
  for (let i = oldLength - 1, j = s.length - 1; i >= 0; i--, j--) {
    if (s[i] !== ' ') {
      s[j] = s[i]
    } else {
      s[j] = '0'
      s[j - 1] = '2'
      s[j - 2] = '%'
      j -= 2
    }
  }
  return s.join('')
}

var s = "We are happy."

var result = replaceSpace(s)

console.log(result)