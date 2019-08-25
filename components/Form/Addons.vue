<template>
  <div class="field has-addons">
    <div class="control">
      <a
        :class="{
          button: true,
          [`is-${theme}`]: true
        }"
        >{{ button }}</a
      >
    </div>
    <div class="control is-expanded">
      <input :id="id" v-model="field" type="text" class="input" />
    </div>
  </div>
</template>

<script>
import useInput from './hooks/useInput'

export default {
  name: 'FormAddons',
  props: {
    button: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'static'
    }
  },
  setup(_, context) {
    return {
      ...useInput(context)
    }
  }
}
</script>
