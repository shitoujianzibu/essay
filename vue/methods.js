const compiler = require('vue-template-compiler')

console.log(compiler.compile('<div v-if="true" v-for="item in 100">w34</div>').render)