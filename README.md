# wc-hugo-example

This is meant to be a playground for adding web components to Hugo.

## Live Preview

This site is mirrored on netlify. Click here to [visit the webiste](https://elegant-shirley-51aeae.netlify.com/)

## Installing Hugo

Complete the [Hugo Quickstart](https://gohugo.io/getting-started/quick-start/).

## Add Dependencies

Run the following command from within the root of your hugo repo.

Create package.json

```
npm init -y
```

Add a11y-media-playera

```
npm install --save @lrnwebcomponents/a11y-media-player
npm install --save @polymer/paper-icon-button
```

## Add Bundler

Unfortunitely, we still need a bundler cause the web.  Amiright?

```
npm install --save-dev rollup rollup-plugin-filesize rollup-plugin-json rollup-plugin-node-resolve rollup-plugin-terser rollup-watch
```

Create rollup config.

```
touch rollup.config.js
```

Copy and past this code.
```js
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
```

### Add our javascript entryfile

```
mkdir -p static/js/src/app.js
```

Add the a11y-media-player to the entry file

```
import "@lrnwebcomponents/a11y-media-player/a11y-media-player.js"
```
