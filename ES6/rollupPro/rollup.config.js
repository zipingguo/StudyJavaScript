import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: './src/index.js',
  // format: 'umd',
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ],
  output: [{
    file: './build/bundle.js',
    format: 'umd'
  }]
}