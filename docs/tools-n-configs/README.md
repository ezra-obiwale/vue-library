# Tools

To make development fast and easy, the following tools have been installed:

## Rollup

::: tip Website
[https://rollupjs.org](https://rollupjs.org)
:::

Rollup is the main library here as it helps to compile your code into popular formats
that can be used in the browser or with CommonJS. This means you can just write your
code for ES6 and it would be available in other modes.

### Rollup Plugins

These are the installed plugins:

- `@rollup/plugin-node-resolve`
- `@rollup/plugin-commonjs`
- `rollup-plugin-babel`
- `rollup-plugin-vue`
- `rollup-plugin-terser`

### Rollup Configuration

::: tip Config file
**`./rollup.config.js`**
:::

Rollup is by default configured to build 3 files with formats `esm`, `ssr` and `iife`.
The names of these files are determined by the appropriate keys in the **package.json**
file under the `rollup` key:

```json
{
    "rollup": {
        "module": "dist/library.esm.js",
        "ssr": "dist/library.ssr.js",
        "browser": "dist/library.min.js"
    }
}
```

## Babel

::: tip Website
[https://babeljs.io](https://babeljs.io)
:::

Even though babel can sure do lots of magic, the only magic we allow here is to compile
ES6 to ES5 so that there's no compatibility issue.

## VuePress

::: tip Website
[https://vuepress.vuejs.org](https://vuepress.vuejs.org)
:::

VuePress in responsible for this beautiful documentation.

::: tip ### Custom Plugins

- `@vuepress/plugin-back-to-top`
- `vuepress-plugin-dehydrate`
- `vuepress-plugin-redirect`
:::

### Custom Theme

`vuepress-theme-yuu` is to be thanked for this beautiful them which allows toggling
dark mode on/off and selecting primary color theme.

### VuePress Configuration

The configuration follows strictly the default directory structure however, the `nav`
and `sidebar` configs of `themeConfig` have been separated into individual files
to make it easy to update.

::: tip Navigation
**`.vuepress/nav.js`**
:::

::: tip Sidebar
**`.vuepress/sidebar.js`**
:::

::: tip Others
**`.vuepress/config.js`**

Some defaults have been set. Do override/change these as necessary.
:::

## Components

### Components Configuration
