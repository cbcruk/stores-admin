<template>
  <thead>
    <tr>
      <th v-for="(th, index) in thead" :key="index">
        {{ th }}
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: 'ListHead',
  props: {
    thead: {
      type: Array,
      default() {
        return ['스토어명', '전화번호', '운영시간', '지역', '주소', '기능']
      }
    }
  }
}
</script>
