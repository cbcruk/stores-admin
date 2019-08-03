<template>
  <div id="editor" class="editor" />
</template>

<script>
import InlineEditor from '@ckeditor/ckeditor5-build-inline'

export default {
  name: 'CharacterForm',
  mounted() {
    this.createEditor()
  },
  methods: {
    async createEditor() {
      try {
        const editor = await InlineEditor.create(
          document.querySelector('#editor'),
          {
            toolbar: ['bold', 'italic']
          }
        )

        this.editor = editor
      } catch (error) {
        console.error(error)
      }
    },
    getData() {
      console.log(this.editor.getData())
    }
  }
}
</script>
