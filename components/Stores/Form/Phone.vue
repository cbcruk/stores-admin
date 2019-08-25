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
import { computed } from '@vue/composition-api'

export default {
  name: 'FormPhone',
  setup(_, context) {
    const mask = computed(() => {
      const isSeoul = context.attrs.value.startsWith('02')

      return isSeoul
        ? ['##-###-####', '##-####-####']
        : ['###-###-####', '###-####-####']
    })

    return {
      mask
    }
  }
}
</script>
