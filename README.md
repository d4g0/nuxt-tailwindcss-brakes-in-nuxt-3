#  nuxt-tailwindcss-brakes-in-nuxt-3

```json
"devDependencies": {
    "@nuxtjs/tailwindcss": "^5.1.2",
    "nuxt": "3.0.0-rc.1"
}
```

Just clone install and run
you should get this error trace

```bash
 ERROR  Cannot start nuxt:  Cannot read properties of undefined (reading 'push')              15:31:58

  at addDevServerHandler (node_modules/@nuxtjs/tailwindcss/node_modules/@nuxt/kit/dist/index.mjs:106:38)
  at setup (node_modules/@nuxtjs/tailwindcss/dist/module.mjs:107:7)
  at async Object.normalizedModule (node_modules/@nuxtjs/tailwindcss/node_modules/@nuxt/kit/dist/index.mjs:583:5)
  at async installModule (node_modules/@nuxt/kit/dist/index.mjs:392:3)
  at async initNuxt (node_modules/nuxt/dist/index.mjs:1362:7)
  at async load (node_modules/nuxi/dist/chunks/dev.mjs:6734:9)
  at async Object.invoke (node_modules/nuxi/dist/chunks/dev.mjs:6777:5)
  at async _main (node_modules/nuxi/dist/cli.mjs:46:20)
```