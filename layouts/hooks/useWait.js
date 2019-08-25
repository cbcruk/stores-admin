import { watch, computed } from '@vue/composition-api'

export default root => {
  const waitAny = computed(() => root.$store.getters['wait/any'])

  watch(waitAny, isWait => {
    root.$Progress[isWait ? 'start' : 'finish']()
  })
}
