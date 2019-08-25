<template>
  <div id="app">
    <LayoutNav />

    <Nuxt class="Body" />

    <vue-progress-bar />
  </div>
</template>

<script>
import useWait from './hooks/useWait'
import LayoutNav from '~/components/Layout/Nav.vue'

export default {
  name: 'LayoutDefault',
  head() {
    return {
      script: [
        {
          src:
            'https://maps.googleapis.com/maps/api/js?key=AIzaSyB8Yb93ioJL0aDegwvbHf4xl--QUHSUf2M&libraries=drawing'
        }
      ]
    }
  },
  components: {
    LayoutNav
  },
  setup(_, { root }) {
    useWait(root)
  }
}
</script>

<style scoped>
.Body {
  padding: 1em;
}
</style>
