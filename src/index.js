import * as components from './components'

const registerComponents = () => {
  for (const name in components) {
    Vue.component(name, components[name])
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  registerComponents()
}

export default {
  install(
    Vue,
    options = {
      components: false
    }
  ) {
    if (options.components) {
      registerComponents()
    }
  }
}

export * from './components'