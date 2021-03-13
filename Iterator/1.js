// Interator 提供了统一的接口 用 for... of 消费
const obj = {
  *[Symbol.iterator] () {
    yield 'hello'
    yield 'world'
  }
}
for (const i of obj) {
  console.log(i)
}
const str = 'hello'
const iter = str[Symbol.iterator]()
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())

