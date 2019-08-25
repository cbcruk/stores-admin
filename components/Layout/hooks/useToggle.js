import { ref } from '@vue/composition-api'

export default (isBool = false) => {
  const isShow = ref(isBool)

  function handleToggle() {
    isShow.value = !isShow.value
  }

  return {
    isShow,
    handleToggle
  }
}
