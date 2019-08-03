<template>
  <nav
    class="navbar has-shadow is-spaced"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <RouterLink class="navbar-item" to="/">
        <img src="./Nav/assets/icon.png" />
      </RouterLink>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        @click="toggleNavbar"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div
      class="navbar-menu"
      :style="{ display: isShowNavbar ? 'block' : 'none' }"
    >
      <div class="navbar-start">
        <RouterLink class="navbar-item" to="/stores">
          매장 안내
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'LayoutNav',
  data() {
    return {
      isShowNavbar: false
    }
  },
  methods: {
    toggleNavbar() {
      this.isShowNavbar = !this.isShowNavbar
    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 1088px) {
  .navbar-menu {
    display: flex !important;
  }
}
</style>
