var url = 'https://www.baidu.com/path?name1=value1&name2=value2#top'
function parseUrl (url) {
  var arr = url.split('?')
  var res = {}
  if (!arr[1]) {
    return res
  }
  var tempArr = arr[1].split('#')[0].split('&')
  tempArr.forEach(item => {
    var query = item.split('=')
    res[decodeURIComponent(query[0])] = decodeURIComponent(query[1])
  })
  return res
}


console.log(parseUrl(url))