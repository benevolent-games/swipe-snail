
🐌 swipe-snail
==============

🕹️ live demo at [swipe-snail.benevolent.games](https://swipe-snail.benevolent.games/)  

🙌 horizontal mobile-friendly website panels  
📦 npm package `@benev/swipe-snail`  

<br/>

## easy html-only install (without routing)

1. paste this script into your html page's `<head>`

    ```html
    <script defer src="https://unpkg.com/@benev/swipe-snail/x/elements.js"></script>
    ```

1. place a `snail-system` and `snail-panel` into your html page's `<body>`

    ```html
    <snail-system>
      <snail-panel></snail-panel>
      <snail-panel></snail-panel>
      <snail-panel></snail-panel>
    </snail-system>
    ```

1. there are methods you can call on snail-system elements, and css properties you can set on both.

    you'll have to read the source code for more details.

<br/>

## advanced install (with routing)

- routing is provided as a separate system.
- see [demo.ts](./s/demo.ts) as an example how to integrate swipe-snail with hash-routing
