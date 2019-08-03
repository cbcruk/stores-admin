<template>
  <FormField v-bind="$attrs">
    <div class="control">
      <div class="select">
        <select :id="id" v-model="field">
          <option v-for="{ k, v } in options" :key="k" :value="k">
            {{ v }}
          </option>
        </select>
      </div>
    </div>
  </FormField>
</template>

<script>
import FormField from './Field.vue'
import input from './mixins/input'

export default {
  name: 'FormSelect',
  components: {
    FormField
  },
  mixins: [input],
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
