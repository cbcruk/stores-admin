<template>
  <div class="field has-addons">
    <div class="control">
      <a
        :class="{
          button: true,
          [`is-${theme}`]: true
        }"
      >
        {{ button }}
      </a>
    </div>
    <div class="control is-expanded">
      <input :id="id" v-model="field" type="text" class="input" />
    </div>
  </div>
</template>

<script>
import input from './mixins/input'

export default {
  name: 'FormAddons',
  mixins: [input],
  props: {
    id: {
      type: String,
      default: ''
    },
    button: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'static'
    }
  }
}
</script>
