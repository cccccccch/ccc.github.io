<template>
  <div>
    <el-dialog
      class="GameDialog"
      title="休闲小游戏"
      center
      :visible="show"
      @close="close"
    >
      <div v-if="showgeme" class="content">
        <div v-for="v in gameArr" :key="v.name" class="item">
          <div class="top"><img :src="v.img" alt="" /></div>
          <div class="item-box">
            <div class="center">{{ v.name }}</div>
            <div class="bottom" @click="goGame(v)">开始吧</div>
          </div>
        </div>
      </div>
      <div v-else class="gemepage">
        <tetrisPage v-if="tetrisShow" />
        <twoGame v-else-if="twoShow" />
        <div class="backButton" @click="goHome">
          <i class="el-icon-menu"></i>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import tetrisPage from './tetris.vue'
import twoGame from './2048Game.vue'
export default {
  components: { tetrisPage, twoGame },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      twoShow: false,
      tetrisShow: false,
      showgeme: true,
      showDialog: false,
      gameArr: [
        {
          id: 'tetris',
          name: '俄罗斯方块',
          img: require('@/assets/game/g1.png')
        },
        { id: 'two', name: '2048', img: require('@/assets/game/g6.png') },
        { name: '俄罗斯方块2', img: require('@/assets/game/g1.png') },
        { name: '俄罗斯方块3', img: require('@/assets/game/g1.png') },
        { name: '俄罗斯方块4', img: require('@/assets/game/g1.png') },
        { name: '俄罗斯方块5', img: require('@/assets/game/g1.png') },
        { name: '俄罗斯方块6', img: require('@/assets/game/g1.png') }
      ],
      step: 0
    }
  },
  name: 'GameDialog',
  methods: {
    close (e) {
      this.$emit('showGameDialog')
      this.clearAllaGame()
      this.showgeme = true
    },
    goGame (e) {
      this.clearAllaGame()
      this.showgeme = false
      const name = e.id + 'Show'
      this[name] = true
    },
    clearAllaGame () {
      this.twoShow = false
      this.tetrisShow = false
    },
    goHome () {
      this.showgeme = true
      this.clearAllaGame()
    }
  }
}
</script>

<style scoped lang="scss">
.GameDialog {
  ::v-deep .el-dialog {
    width: 1000px;
    height: 700px;
    background-color: #ccc;
    border-radius: 20px;
    .el-dialog__body {
      height: 430px;
      padding: 0px;
    }
  }
  .gemepage {
    height: 100%;
    position: relative;
    .backButton {
      $size: 28px;
      position: absolute;
      top: 0;
      left: 14px;
      width: $size;
      height: $size;
      line-height: $size;
      text-align: center;
      font-size: 22px;
      border-radius: 50%;
      color: #ff7330;
      font-weight: 700;
      background-color: #ff7330;
      transition: transform 1000ms;
      &:hover {
        color: #fff;
      }
    }
  }
  .content {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    $step: 1;
    $BgcArr: linear-gradient(
        135deg,
        rgb(129, 54, 169) 0%,
        rgb(58, 40, 133) 100%
      ),
      linear-gradient(135deg, rgb(186, 175, 163) 0%, rgb(125, 109, 109) 100%),
      linear-gradient(135deg, rgb(26, 133, 158) 0%, rgb(27, 91, 166) 100%),
      linear-gradient(135deg, rgb(134, 126, 116) 0%, rgb(125, 109, 109) 100%),
      linear-gradient(135deg, rgb(26, 133, 158) 0%, rgb(132, 135, 139) 100%),
      linear-gradient(135deg, rgb(161, 161, 161) 0%, rgb(120, 120, 120) 100%),
      linear-gradient(135deg, rgb(86, 81, 185) 0%, rgb(62, 53, 137) 100%),
      linear-gradient(135deg, rgb(26, 133, 158) 0%, rgb(27, 91, 166) 100%);
    @each $item in $BgcArr {
      $index: index($BgcArr, $item);
      :nth-child(#{$index}) .item-box {
        background: $item;
      }
    }
    .item {
      width: 20%;
      height: 150px;
      margin-top: 35px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      position: relative;
      .top {
        position: absolute;
        top: -10px;
        left: calc(50% - 50px);
        width: 100px;
        height: 100px;
        margin: 0 auto;
        border-radius: 50%;
        box-shadow: rgba(17, 23, 41, 0.6) 0px 32px 32px -8px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      //   &:nth-child(1) .item-box {
      //     background: linear-gradient(
      //       135deg,
      //       rgb(129, 54, 169) 0%,
      //       rgb(58, 40, 133) 100%
      //     );
      //   }

      .item-box {
        margin: 0 auto;
        width: 80%;
        height: 100px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: flex-end;
        border-radius: 20px;
        padding-bottom: 10px;
        color: #fff;
        .center {
          opacity: 0.8;
        }
        .bottom {
          background-color: rgba(255, 255, 255, 0.5);
          padding: 0 20px;
          margin-top: 5px;
          border-radius: 5px;
          opacity: 0.8;
          &:hover {
            opacity: 1;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
