function* foo(x) {
  var y = 2 * (yield (x + 1));
  console.log(y)
  var z = yield (y / 3);
  return (x + y + z);
}

// var a = foo(5);
// a.next() // Object{value:6, done:false}
// a.next() // Object{value:NaN, done:false}
// a.next() // Object{value:NaN, done:true}

var b = foo(5);
console.log(b.next()) // { value:6, done:false }
console.log(b.next(12)) // { value:8, done:false }
console.log(b.next(13)) // { value:42, done:true }