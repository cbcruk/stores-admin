<template>
  <FormSelect
    id="area"
    :options="areas"
    v-bind="$attrs"
    label="지역"
    v-on="$listeners"
  />
</template>

<script>
export default {
  name: 'FormArea',
  props: {
    areas: {
      type: Array,
      default() {
        return [
          { k: '', v: '선택' },
          { k: 'seoul', v: '서울' },
          { k: 'gyeonggi', v: '경기' },
          { k: 'incheon', v: '인천' },
          { k: 'daegu', v: '대구' },
          { k: 'pusan', v: '부산' }
        ]
      }
    }
  }
}
</script>
