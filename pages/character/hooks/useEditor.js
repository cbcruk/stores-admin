import { onMounted, ref } from '@vue/composition-api'
import InlineEditor from '@ckeditor/ckeditor5-build-inline'

export default () => {
  const editor = ref(null)

  onMounted(async () => {
    editor.value = await InlineEditor.create(
      document.querySelector('#editor'),
      {
        toolbar: ['bold', 'italic']
      }
    )
  })

  function getData() {
    return editor.value.getData()
  }

  return { editor, getData }
}
