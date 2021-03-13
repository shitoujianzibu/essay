const studentInfo = {
  name: '小明',
  age: 12,
  favoriteFoods: [
    'apple',
    'dumpling'
  ],
  habits: [
    { name: 'skating', 'zh-CN': '滑冰' },
  ],
  parents: {
    0: {
      relationShip: 'Dad',
      name: '小明他爸',
    },
    Mom: '小明他妈',
  }
}
const getValue = (origin, path, defaultValue = undefined) => {
  const paths = path.replace(/\[/g,'.').replace(/\]/g,'').split('.')
  let result = origin
  for (let p of paths) {
    result = Object(result)[p]
    console.log(result)
    if (result === undefined) {
      return defaultValue
    }
  }
  return result
}
console.log(getValue(studentInfo, 'name'));
console.log(getValue(studentInfo, 'favoriteFoods[0]'));
console.log(getValue(studentInfo, 'habbits[0][zh-CN]'));
console.log(getValue(studentInfo, 'habbits[1].name')); // undefined
console.log(getValue(studentInfo, 'parents.Mom'));
console.log(getValue(studentInfo, 'parents[0].name'));