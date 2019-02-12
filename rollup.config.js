import resolve from 'rollup-plugin-node-resolve'
import filesize from 'rollup-plugin-filesize';
import {terser} from 'rollup-plugin-terser';

// rollup.config.js
export default {
  input: 'static/js/src/app.js',
  output: {
    file: 'static/js/dist/bundle.js',
    format: 'esm'
  },
  onwarn(warning) {
    if (warning.code !== 'CIRCULAR_DEPENDENCY') {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    resolve(),
    terser({
      warnings: true,
      mangle: {
        module: true,
      },
    }),
    filesize({
      showBrotliSize: true,
    })
  ]
}