<template>
  <FormInput
    id="tel"
    v-mask="mask"
    v-bind="$attrs"
    label="전화번호"
    v-on="$listeners"
  />
</template>

<script>
export default {
  name: 'FormPhone',
  computed: {
    isSeoul() {
      return this.$attrs.value.startsWith('02')
    },
    mask() {
      return this.isSeoul
        ? ['##-###-####', '##-####-####']
        : ['###-###-####', '###-####-####']
    }
  }
}
</script>
