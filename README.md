# bxb-scroll-to-top
Vue.js component [scroll to top] from [BixBite](https://github.com/russsiq/bixbite).

### Installation

Download library or can be installed as `npm` package:
```console
npm i bxb-scroll-to-top --save-dev
```

### Getting started

To start using `bxb-scroll-to-top`, you need to do is plugin installation. Somewhere in your main app.js file:
```js
// Import components to Vue application as plugins.
import ScrollToTop from 'bxb-scroll-to-top';

// Install plugins to Vue application.
Vue.use(ScrollToTop);

// Create a fresh Vue application instance and attach it to the page.
const app = new Vue({
    el: '#app'
});

// Make some vue plugins methods to global.
window.ScrollToTop = app.$scrolling;
```

### Usage and API

There are one methods for calling show:
```js
// If necessary, activate the components immediately.
window.ScrollToTop.show({active: true});
```

### Лицензия

bxb-scroll-to-top - программное обеспечение с открытым исходным кодом, распространяющееся по лицензии [MIT license](https://choosealicense.com/licenses/mit/).
