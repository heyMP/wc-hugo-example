---
title: "Hugo meets Web Components"
featured_image: 'images/gohugo-default-sample-hero-image.jpg'
description: "Witness the future of web."
---

## @lrnwebcomponents/a11y-media-player

<a11y-media-player accent-color="blue" stand-alone>
  <source src="https://iandevlin.github.io/mdn/video-player-with-captions/video/sintel-short.mp4" type="video/mp4">
  <source src="https://iandevlin.github.io/mdn/video-player-with-captions/sintel-short.webm" type="video/webm">
</a11y-media-player>

Usage:

<code-sample copy-clipboard-button type="html">
  <template>
    <a11y-media-player accent-color="blue" stand-alone>
      <source src="https://iandevlin.github.io/mdn/video-player-with-captions/video/sintel-short.mp4" type="video/mp4">
      <source src="https://iandevlin.github.io/mdn/video-player-with-captions/sintel-short.webm" type="video/webm">
    </a11y-media-player>
  </template>
</code-sample>



# wc-hugo-example

This is meant to be a playground for adding web components to Hugo.

## Live Preview

This site is mirrored on netlify. Click here to [visit the webiste](https://elegant-shirley-51aeae.netlify.com/)

## Installing Hugo

Complete the [Hugo Quickstart](https://gohugo.io/getting-started/quick-start/).

## Add Dependencies

Run the following command from within the root of your hugo repo.

Create package.json

<code-sample copy-clipboard-button type="bash">
  <template>
    npm init -y
  </template>
</code-sample>

Add a11y-media-playera

<code-sample copy-clipboard-button type="bash">
  <template>
    npm install --save @lrnwebcomponents/a11y-media-player
    npm install --save @polymer/paper-icon-button
  </template>
</code-sample>

## Add Bundler

Unfortunitely, we still need a bundler cause the web.  Amiright?

<code-sample copy-clipboard-button type="bash">
  <template>
npm install --save-dev rollup rollup-plugin-filesize rollup-plugin-json rollup-plugin-node-resolve rollup-plugin-terser rollup-watch
  </template>
</code-sample>

Create rollup config.

<code-sample copy-clipboard-button type="bash">
  <template>
touch rollup.config.js
  </template>
</code-sample>

Add this code to rollup.config.js
<code-sample copy-clipboard-button type="javascript">
  <template>
  import resolve from "rollup-plugin-node-resolve";
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
        console.error("(!) " + warning.message);
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
  </template>
</code-sample>

Add our javascript entryfile

<code-sample copy-clipboard-button type="javascript">
  <template>
mkdir -p static/js/src/app.js
  </template>
</code-sample>

Add the a11y-media-player to the entry file

<code-sample copy-clipboard-button type="javascript">
  <template>
import "@lrnwebcomponents/a11y-media-player/a11y-media-player.js"
  </template>
</code-sample>
