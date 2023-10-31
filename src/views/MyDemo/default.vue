<template>
  <div>
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <h1>首<br/>页</h1>
    <div class="box">
      <h3>1111111</h3>
      <h3 class="test" v-for="v in 4" :key="v">222222</h3>
    </div>
    <div id="downloadBtn" @click="downloadFile">测试下载</div>
    <div id="progressBar">测试下载进度条{{ percent }}</div>
    <iframe
      id="iframe"
      scrolling="auto"
      security="restricted"
      frameborder="1"
      :src="sonURL"
      height="600px"
      width="600px"
      @load="onload"
      sandbox="allow-popups allow-same-origin allow-top-navigation allow-forms allow-scripts allow-popups"
    ></iframe>
  </div>
</template>
<script>
export default {
  name: 'defaultPage',
  data () {
    return {
      percent: 0,
      index: 0,
      step: 0,
      // sonURL: 'https://5n8328i248.imdo.co'
      // sonURL: 'https://aistest.aviva-cofco.com.cn/ais/screens/view/full/case/1405122/entity/1405122_4458338/page/1/basequestions'
      sonURL: 'https://aistest.aviva-cofco.com.cn/ais/screens/externalOpenCase?x=6oi1VN2VEbSdD0wOPnlaP8E70sgRRoSVPUZUAUFwqmgaQG43VK9T2kffMRmMHDBWdknLvAAPgU1SkdQssQVGAruTiSpi-xky2tX7Qm5LLDI=~sksCClxnBQLb9MvB_jn4JA=='
    }
  },
  mounted () {},
  methods: {
    onload () {
      // setTimeout(() => {
      //   const box = document.querySelector('#iframe')
      //   box.contentWindow.location =
      //     'https://aistest.aviva-cofco.com.cn/ais/screens/view/full/case/1405122/entity/1405122_4458338/page/1/basequestions'
      // }, 1000)
    },
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
.box {
  & h3:not(:nth-child(1)) {
    &:nth-child(2) {
      color: red;
    }
  }
}
</style>
