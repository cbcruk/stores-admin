<template>
  <div id="editor" class="editor" />
</template>

<script>
import useEditor from './hooks/useEditor'

export default {
  name: 'CharacterForm',
  setup() {
    const value = useEditor()

    return {
      ...value
    }
  }
}
</script>
