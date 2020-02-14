import * as components from './components'

if (typeof window !== 'undefined' && window.Vue) {
  for (const name in components) {
    Vue.component(name, components[name])
  }
}
