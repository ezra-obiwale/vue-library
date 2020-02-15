<template>
  <div>
    Hey {{ name }}. This is an Example Components.

    <!--
      @slot Use this slot to insert custom content
        @binding {string} name The name of the current user
    -->
    <slot :name="name">You can insert anything here.</slot>

    <button @click="triggerEvent">Click this button to trigger an event.</button>
  </div>
</template>
<script>
export default {
  name: 'Example',
  props: {
    /**
     * The name of the user
     */
    name: {
      type: String,
      default: 'Joe'
    }
  },
  methods: {
    /**
     * Triggers an event
     *
     * @param {object} e The event object
     * @public
     */
    triggerEvent (e) {
      /**
       * ButtonClicked event
       *
       * @property {string} name The name of the user who clicked the button
       * @type {string} The name
       */
      this.$emit('buttonClicked', this.name)
    }
  }
}
</script>
