<template>
  <div>
    <h1>首页</h1>
    <div class="box">
      <h3>1111111</h3>
      <h3 class="test" v-for="v in 4" :key="v">222222</h3>
    </div>
    <div id="downloadBtn" @click="downloadFile">测试下载</div>
    <div id="progressBar">测试下载进度条{{percent}}</div>
  </div>
</template>
<script>
export default {
  name: 'defaultPage',
  data () {
    return {
      percent: 0,
      index: 0
    }
  },
  methods: {
    downloadFile () {
      const downloadURL =
        'https://f001.backblazeb2.com/file/geph4-dl/geph-releases/windows-stable/4.8.5/geph-windows-setup.exe' // 下载链接
      const xhr = new XMLHttpRequest() // 创建 XMLHttpRequest 对象
      xhr.open('GET', downloadURL, true) // 打开请求链接
      xhr.responseType = 'blob' // 设置响应类型为二进制数据
      xhr.onload = function () {
        if (xhr.status === 200) {
          console.log(xhr.response)
          const blob = xhr.response // 获取响应数据
          const link = document.createElement('a') // 创建一个 a 标签
          link.href = window.URL.createObjectURL(blob) // 设置下载链接
          link.download = 'dy.mp4' // 设置下载文件名
          link.click() // 模拟用户单击下载链接
        }
      }
      xhr.onprogress = function (event) {
        // lengthComputable 表示ProgressEvent 所关联的资源是否具有可以计算的长度
        if (event.lengthComputable) {
          console.log(event, 'event')
          // 计算下载进度
          this.percent = (event.loaded / event.total) * 100
          // 更新进度条
          // this.percent = percent
          console.log(this.percent, 'percent')
        }
      }
      xhr.send() // 发送请求
    }
  }
}
</script>
<style scoped lang="scss">
.box{
& h3:not(:nth-child(1)){
  &:nth-child(2){
    color: red;
  }
}
}
</style>
