<template>
  <div class="field is-grouped">
    <p class="control">
      <RouterLink :to="`/stores/${id}`" class="button is-primary">
        수정
      </RouterLink>
    </p>
    <p class="control">
      <a class="button is-danger" @click="handleDelete({ id, name })">
        삭제
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'StoresCommand',
  props: {
    id: {
      type: [String, Number],
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleDelete({ name }) {
      this.$modal.show('dialog', {
        title: '삭제',
        text: `스토어명: ${name}`,
        buttons: [
          {
            title: '취소'
          },
          {
            title: '삭제',
            handler: () => {
              this.$modal.hide('dialog')
            }
          }
        ]
      })
    }
  }
}
</script>
