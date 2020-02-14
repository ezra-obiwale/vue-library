const pkg = require('../../package.json')
const nav = require('./nav')
const sidebar = require('./sidebar')
const webpackConfig = require('../../webpack.config')

module.exports = {
  /* https://vuepress.vuejs.org/guide/assets.html#base-url */
  // base: '/components/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vue Library',
      description: 'The official documentation of this vue library.'
    }
  },
  markdown: {
    lineNumbers: true
  },
  theme: 'yuu',
  themeConfig: {
    repoLabel: 'Contribute!',
    repo: pkg.repository,
    nav: nav.length ? nav : false,
    sidebar: sidebar.length ? sidebar : 'auto',
    sidebarDepth: 3,
    yuu: {
      defaultDarkTheme: true,
      disableThemeIgnore: true
    }
  },
  extraWatchFiles: [
    '.vuepress/nav.js',
    '.vuepress/sidebar.js',
    'webpack.config.js'
  ],
  configureWebpack: webpackConfig,
  plugins: {
    dehydrate: true,
    redirect: {
      locales: true
    },
    'back-to-top': true
  }
}
