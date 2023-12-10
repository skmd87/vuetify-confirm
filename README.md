<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: My Module
- Package name: my-module
- Description: My new Nuxt module
-->

# @skmd87/vuetify-confirm

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Vuetigy Nuxt module to show confirmation dialog

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/my-module?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->


## Quick Setup

1. Add `@skmd87/vuetify-confirm` dependency to your project

```bash
# Using pnpm
pnpm add  @skmd87/vuetify-confirm

# Using yarn
yarn add @skmd87/vuetify-confirm

# Using npm
npm install @skmd87/vuetify-confirm
```

2. Add `vuetify-confirm` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'vuetify-confirm'
  ]
})
```


That's it! You can now use vuetify-confirm in your Nuxt app ✨

## Usage 

In your layout, add vuetify-confirm component inside vuetify app

```
 <v-app>
   <VuetifyConfirm />
 </v-app>
 ```

 and you can use it like this:
 ```
const confirm = useConfirm()
.
.
.
confirm('Are you sure?')
  .then((v) => /* do something if accepted */ )
  .catch(e=> /* do something if rejected */)
 ```

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/my-module/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/my-module

[npm-downloads-src]: https://img.shields.io/npm/dm/my-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/my-module

[license-src]: https://img.shields.io/npm/l/my-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/my-module

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
