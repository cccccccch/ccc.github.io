<template>
  <div>
    <div class="navbar">
      <div class="navbar-icon" @click="IconClick">
        <i v-if="Icon" class="el-icon-s-unfold" />
        <i v-else class="el-icon-s-fold" />
      </div>
      <div class="navbar-name">
        <span class="name-1">cc测试布局</span>
        <span class="name-2">Bate版本</span>
      </div>
      <el-dropdown @command="handleCommand">
        <div class="navbar-userInfo">
          <!-- <img v-showImg="defaultImg" :src="userInfo.staffPhoto" alt="" /> -->
          <span class="userName">6666test</span>
          <i class="el-icon-arrow-down" />
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="home"> 测试数据1</el-dropdown-item>
            <el-dropdown-item command="edit"> 测试数据2</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div class="box">
      <div style="width: 100%">
        <el-tabs
          v-model="tabActive"
          type="border-card"
          v-show="tabList.length"
          closable
          @tab-remove="removeTab"
          class="tabs"
          @tab-click="clickTab"
        >
          <el-tab-pane
            v-for="item in tabList"
            :key="item.pathName"
            :label="item.name"
            :name="item.pathName"
          ></el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NavBar',
  data () {
    return {
      defaultImg: '',
      Icon: false,
      tabActive: 'Default',
      tabList: [
        // {
        //   path: '/default',
        //   pathName: 'default',
        //   name: '首页',
        //   fullPath: '/default'
        // }
      ]
    }
  },
  computed: {},
  created () {
    this.addTab(this.$route)
  },
  watch: {
    $route (to, from) {
      this.addTab(to)
    }
  },
  methods: {
    clickTab () {
      const res = this.tabList.find(v => v.pathName === this.tabActive)
      this.$router.push(res.fullPath)
    },
    removeTab (targetName) {
      this.tabList = this.tabList.filter(tab => tab.pathName !== targetName)
    },
    addTab (to) {
      if (this.tabList.findIndex(item => item.pathName === to.name) === -1) {
        this.tabList.push({
          ...to.meta,
          pathName: to.name,
          fullPath: to.fullPath,
          path: to.path
        })
      }
      this.tabActive = to.name
    },
    IconClick () {
      this.Icon = !this.Icon
      this.$bus.$emit('isCollapse', this.Icon)
    },
    handleCommand (command) {
      switch (command) {
        case 'home':
          this.$router.push('/')
          break
        case 'edit':
          this.$confirm('是否需要退出?', '温馨提示', {
            confirmButtonText: '是的我要退',
            cancelButtonText: '不，我再想想',
            type: 'warning'
          })
            .then(() => {
              this.$store.commit('user/logout')
              this.$router.push('/login?directive=' + this.$route.fullPath)
              this.$message.success('再见')
            })
            .catch(() => {})
          break
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  height: 40px;
  background-color: #3d6df8;
  display: flex;
  align-items: center;
  color: #fff;
  &-icon {
    margin: 0 15px;
    cursor: pointer;
  }
  &-name {
    flex: 1;
    .name-2 {
      margin-left: 10px;
      padding: 4px;
      border-radius: 7px;
      background-color: #84a9fe;
    }
  }
  &-userInfo {
    margin-right: 15px;
    display: flex;
    align-items: center;
    color: #fff;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    .userName {
      padding: 0 15px;
      color: #000;
    }
  }
}
.box {
  background-color: red;
  ::v-deep .el-tabs--border-card>.el-tabs__content{
    padding: 0;
  }
}
</style>
