function* clock () {
  while (true) {
    console.log('tick')
    yield
    console.log('tock')
    yield
  }
}