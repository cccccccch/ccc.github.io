<template>
  <div
    class="dragLabel"
    @dragstart="dragstart"
    @dragover="dragover"
    @dragenter="dragenter"
    @drop="drop"
  >
    <div class="left" data-drop="move">
      <div class="lable item-color1" data-effect="copy" draggable="true">
        包子
      </div>
      <div class="lable item-color2" data-effect="copy" draggable="true">
        豆浆
      </div>
      <div class="lable item-color3" data-effect="copy" draggable="true">
        油条
      </div>
      <div class="lable item-color4" data-effect="copy" draggable="true">
        西兰花炒蛋
      </div>
      <div class="lable item-color5" data-effect="copy" draggable="true">
        桔子炒绿豆
      </div>
      <div class="lable item-color6" data-effect="copy" draggable="true">
        火龙果炒肉
      </div>
      <div class="lable item-color7" data-effect="copy" draggable="true">
        草莓红烧肉
      </div>
      <div class="lable item-color8" data-effect="copy" draggable="true">
        桔子炖排骨
      </div>
      <div class="lable item-color9" data-effect="copy" draggable="true">
        牛奶方便面
      </div>
    </div>
    <div class="right">
      <table border="1" cellspacing="0" cellpadding="50" class="table">
        <thead>
          <tr>
            <td></td>
            <td>周1</td>
            <td>周2</td>
            <td>周3</td>
            <td>周4</td>
            <td>周5</td>
          </tr>
        </thead>
        <tbody>
          <tr class="breakfast">
            <th rowspan="2">早餐</th>
            <td data-drop="copy"></td>
            <td data-drop="copy"></td>
            <td data-drop="copy"></td>
            <td data-drop="copy"></td>
            <td data-drop="copy"></td>
          </tr>
          <tr class="breakfastTwo">
            <td data-drop="copy"></td>
            <td data-drop="copy"></td>
            <td data-drop="copy"></td>
            <td data-drop="copy"></td>
            <td data-drop="copy"></td>
          </tr>
          <tr class="lunch">
            <th rowspan="2">中餐</th>
            <td data-drop="copy"></td>
            <td data-drop="copy"></td>
            <td data-drop="copy"></td>
            <td data-drop="copy"></td>
            <td data-drop="copy"></td>
          </tr>
          <tr class="lunchTwo">
            <td data-drop="copy"></td>
            <td data-drop="copy"></td>
            <td data-drop="copy"></td>
            <td data-drop="copy"></td>
            <td data-drop="copy"></td>
          </tr>
          <tr class="dinner">
            <th rowspan="2">晚餐</th>
            <td data-drop="copy"></td>
            <td data-drop="copy"></td>
            <td data-drop="copy"></td>
            <td data-drop="copy"></td>
            <td data-drop="copy"></td>
          </tr>
          <tr class="dinnerTwo">
            <td data-drop="copy"></td>
            <td data-drop="copy"></td>
            <td data-drop="copy"></td>
            <td data-drop="copy"></td>
            <td data-drop="copy"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dragLabel',
  data () {
    return {
      source: ''
    }
  },
  methods: {
    dragstart (e) {
      // 控制拖拽中的是移动 move 还是复制 copy
      // 使用自定义属性标记标签是move还是copy
      e.dataTransfer.effectAllowed = e.target.dataset.effect
      this.source = e.target
    },
    dragover (e) {
      e.preventDefault()
    },
    clearBgc () {
      document.querySelectorAll('.drop-over').forEach(v => {
        v.classList.remove('drop-over')
      })
    },
    getDropNode (e) {
      while (e) {
        if (e.dataset && e.dataset.drop) {
          return e
        }
        e = e.parentNode
      }
    },
    dragenter (e) {
      this.clearBgc()
      const dropNode = this.getDropNode(e.target)
      if (dropNode && dropNode.dataset.drop === e.dataTransfer.effectAllowed) {
        dropNode.classList.add('drop-over')
      }
    },
    drop (e) {
      this.clearBgc()
      const dropNode = this.getDropNode(e.target)
      if (dropNode && dropNode.dataset.drop === e.dataTransfer.effectAllowed) {
        if (dropNode.dataset.drop === 'copy') {
          dropNode.innerHTML = ''
          const cloned = this.source.cloneNode(true)
          cloned.dataset.effect = 'move'
          dropNode.appendChild(cloned)
        } else {
          this.source.remove()
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.dragLabel {
  display: flex;
  width: 100%;
  height: 100vh;
  .left {
    width: 150px;
    height: 450px;
    padding: 20px 5px 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 16px;
  }
  .right {
    width: calc(100% - 150px);
    padding: 20px 60px 20px 0;
    table {
      // width: 100%;
      // height: 100%;
      thead {
        tr {
          height: 60px;
        }
      }
      td {
        width: 135px;
        height: 50px;
      }
    }
  }
}
.drop-over {
  background-color: #ccc;
}
.lable {
  width: 130px;
  height: 45px;
  margin: 0 auto;
  text-align: center;
  line-height: 45px;
  border: 1px solid #ccc;
}
.item-color1 {
  background-color: skyblue;
}
.item-color2 {
  background-color: blue;
}
.item-color3 {
  background-color: pink;
}
.item-color4 {
  background-color: #f90;
}
.item-color5 {
  background-color: #f09;
}
.item-color6 {
  background-color: #90f;
}
.item-color7 {
  background-color: #09f;
}
.item-color8 {
  background-color: #9f0;
}
.item-color9 {
  background-color: #0f9;
}
</style>
