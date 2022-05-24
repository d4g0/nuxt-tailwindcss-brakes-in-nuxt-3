#  nuxt-tailwindcss-brakes-in-nuxt-3

```json
"devDependencies": {
    "@nuxtjs/tailwindcss": "^5.1.2",
    "nuxt": "3.0.0-rc.3"
  }
```

Just clone install and run
you should get this error trace

```bash
  ERROR  Cannot start nuxt:  Cannot find module 'postcss-custom-properties'
Require stack:
- /home/dago/Desktop/reproductions/nuxt-tailwindcss-brakes-in-nuxt-3/index.js

  Require stack:
  - index.js
  at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15)
  at Function.resolve (node:internal/modules/cjs/helpers:108:19)
  at Function._resolve [as resolve] (node_modules/jiti/dist/jiti.js:1:192841)
  at resolveModule (node_modules/@nuxt/kit/dist/index.mjs:242:29)
  at requireModule (node_modules/@nuxt/kit/dist/index.mjs:257:24)
  at node_modules/@nuxt/vite-builder/dist/index.mjs:750:20
  at Array.map (<anonymous>)
  at resolveCSSOptions (node_modules/@nuxt/vite-builder/dist/index.mjs:749:167)
  at bundle (node_modules/@nuxt/vite-builder/dist/index.mjs:787:12)
  at async build (node_modules/nuxt/dist/index.mjs:1650:5)

```