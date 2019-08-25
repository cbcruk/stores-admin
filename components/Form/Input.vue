<template>
  <FormField v-bind="$attrs">
    <div class="control">
      <input :id="id" v-model="field" type="text" class="input" />
    </div>
  </FormField>
</template>

<script>
import FormField from './Field.vue'
import useInput from './hooks/useInput'

export default {
  name: 'FormInput',
  components: {
    FormField
  },
  setup(_, context) {
    return {
      ...useInput(context)
    }
  }
}
</script>
