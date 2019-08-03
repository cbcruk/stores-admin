<template>
  <FormField v-bind="$attrs">
    <div class="control">
      <input :id="id" v-model="field" type="text" class="input" />
    </div>
  </FormField>
</template>

<script>
import FormField from './Field.vue'
import input from './mixins/input'

export default {
  name: 'FormInput',
  components: {
    FormField
  },
  mixins: [input]
}
</script>
