// https://vue-styleguidist.github.io/docs/docgen-cli.html#config

const config = {
  componentsRoot: 'src/components',
  components: '**/[A-Z]*.vue',
  defaultExamples: true,
  outDir: 'docs/components',
  outFile: 'README.md',
  watch: true,
  apiOptions: {
    locallyRegisterComponents: true
  }
}

if (config.outFile) {
  config.templates = {
    component: require('./docs/docgen_templates/component'),
    defaultExample: require('./docs/docgen_templates/defaultExample'),
    events: require('./docs/docgen_templates/events'),
    functionalTag: require('./docs/docgen_templates/functionalTag'),
    methods: require('./docs/docgen_templates/methods'),
    props: require('./docs/docgen_templates/props'),
    slots: require('./docs/docgen_templates/slots')
  }
}

module.exports = config
