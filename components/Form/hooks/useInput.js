import { computed } from '@vue/composition-api'

export default context => {
  const field = computed({
    get: () => context.attrs.value,
    set: value => context.emit('input', value)
  })
  const id = context.attrs.id || ''

  return {
    field,
    id
  }
}
