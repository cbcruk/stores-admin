<template>
  <tbody>
    <tr
      v-for="{ id, name, tel, hours, address, area, href } in items"
      :key="id"
    >
      <td>{{ name }}</td>
      <td>{{ tel }}</td>
      <td>{{ hours }}</td>
      <td>{{ area }}</td>
      <td>
        <a :href="href" target="_blank">
          {{ address }}
        </a>
      </td>
      <td>
        <ListCommand :id="id" :name="name" />
      </td>
    </tr>
  </tbody>
</template>

<script>
import ListCommand from './Command.vue'

export default {
  name: 'ListBody',
  components: {
    ListCommand
  },
  props: {
    items: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
