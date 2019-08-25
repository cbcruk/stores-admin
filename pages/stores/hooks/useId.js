import { computed } from '@vue/composition-api'

export default root => {
  const { value } = computed(() => {
    const id = root.$route.params.id

    return {
      id,
      hasId: Boolean(id)
    }
  })

  return {
    ...value
  }
}
