export default {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: ''
    },
    value: {
      default: ''
    }
  },
  computed: {
    field: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  }
}
