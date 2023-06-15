<template>
  <div>
    <el-scrollbar style="height: 100%">
      <el-menu
        :default-active="name"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="showCollapse"
      >
        <el-menu-item
          v-for="item in routes"
          :index="item.name"
          :key="item.name"
          @click="menuClick(item.path)"
        >
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.meta.name }}</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {
      showCollapse: false,
      name: ''
    }
  },
  computed: {
    routes () {
      const routeInit = this.$router.options.routes
      const resdata = routeInit.filter(item => item.name === 'Mydemo')
      return resdata[0].children
    }
  },
  created () {
  },
  watch: {
    $route: {
      handler (val) {
        console.log(val)
        this.name = val.name
      },
      immediate: true
    }
  },
  mounted () {
    this.$bus.$on('isCollapse', res => {
      this.showCollapse = res
    })
  },
  beforeDestroy () {
    this.$bus.$off('isCollapse')
  },
  methods: {
    // 左侧菜单 点击跳转
    menuClick (path) {
      this.$router.push(`/mydemo/${path}`)
    },
    handleOpen (key, keyPath) {},
    handleClose (key, keyPath) {}
  }
}
</script>

<style>
.el-scrollbar__view {
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100%;
}
</style>
