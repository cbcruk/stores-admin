<template>
  <div class="field">
    <label class="label" :for="id">
      {{ label }}
    </label>

    <slot />
  </div>
</template>

<script>
export default {
  name: 'FormField',
  props: {
    id: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  }
}
</script>
