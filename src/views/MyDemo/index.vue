<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div :class="{ 'fixed-header': fixedHeader }">
        <navbar />
      </div>
      <app-main />
    </div>
  </div>
  <!-- <button @click="$router.push('/mydemo/test')">跳转test</button>
    <router-view :key="key" /> -->
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'
export default {
  name: 'DemoIndex',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  data () {
    return {
      isCollapse: true,
      fixedHeader: true
    }
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  display: flex;
  .main-container {
    flex: 1;
  }
}
</style>
