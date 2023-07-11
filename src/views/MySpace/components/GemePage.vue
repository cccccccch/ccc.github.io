<template>
  <div class="GemePage" @click="goGame(999)">
    <div class="circle">
      <img :src="gameArr[step].img" alt="" />
    </div>
    <div class="center">
      <div class="top">
        <i class="el-icon-arrow-left" :class="{ active: step === 0 }"></i>
        <i class="el-icon-arrow-right"></i>
      </div>
      <div class="bottom" @click="goGame(step)">
        <div class="title">{{ gameArr[step].name }}</div>
        <div class="txt">{{ gameArr[step].text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GemePage',
  data () {
    return {
      gameArr: [
        {
          name: '俄罗斯方块',
          text: '按键上下控制方块移动旋转',
          img: require('@/assets/game/g1.png')
        }
      ],
      step: 0
    }
  },
  methods: {
    goGame (num) {
      if (num === 999) {
        this.$emit('isShowGameDialog')
      } else {
        this.$emit('isShowGameDialog')
      }
    }
  }
}
</script>

<style scoped lang="scss">
$w: 200px;
$h: 230px;
.GemePage {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-top: 80px;
  position: relative;
  .circle {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 120px;
    border-radius: 50%;
    z-index: 20;
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
  }
  .center {
    box-sizing: border-box;
    height: 100%;
    border-radius: 1rem;
    z-index: 10;
    padding-top: 65px;
    background: linear-gradient(135deg, #25195a, #0d0824);
    .top {
      height: 20%;
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
      i {
        color: #fff;
        background-color: rgba(255, 255, 255, 0.2);
        padding: 3px;
        border-radius: 50%;
      }
      .active {
        opacity: 0.4;
      }
    }
    .bottom {
      height: 80%;
      background: linear-gradient(135deg, #3e397375, #371b6900);
      border-radius: 200px 200px 0 0/20px 20px 0 0;
      font-size: 12px;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .title {
        font-size: 16px;
        opacity: 1;
        margin-bottom: 7px;
      }
      .txt {
        opacity: 0.7;
      }
    }
  }
}
</style>
