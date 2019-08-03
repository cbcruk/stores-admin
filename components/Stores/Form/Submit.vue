<template>
  <div class="field is-grouped" :style="{ marginTop: `${0.75 * 3}rem` }">
    <div class="control">
      <button type="submit" class="button is-link">
        저장
      </button>
    </div>
    <div class="control">
      <button type="button" class="button is-cancel" @click="onCancel">
        취소
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormSubmit',
  methods: {
    onCancel() {
      this.$router.back()
    }
  }
}
</script>
