# runes-repro

```sh
npm install
npm start
```

Open <http://localhost:3002/>

`$effect()` inside a store with runes throws `Uncaught Error: effect_orphan`


## Previous issue(s)

- ~Observe the `$state is not defined` error in the console.~ Fixed in <https://github.com/egilsster/runes-repro/commit/7a4a688f91ca0dff697b9f7d7db6ad3b3621d377> (<https://github.com/sveltejs/svelte-loader/issues/239>)
- ~`$derived.by` not working as expected outside component files.~ Fixed in <https://github.com/egilsster/runes-repro/commit/7effbcb85fa09ca4b54873beff6655806a26e331> (<https://github.com/sveltejs/svelte/issues/12124>)
