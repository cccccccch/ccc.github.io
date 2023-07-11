<template>
  <div class="about h-full w-full">
    <section class="about-bgc h-full w-full">
      <div class="about-bgc-img h-full w-full"></div>
      <div class="about-bgc-mask"></div>
    </section>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
.h-full{
  height: 100%;
}
.w-full{
  width: 100%;
}
.about{
  &-bgc{
    &-img{
      background-image: url('../assets/home/IMG_20210703_171550.jpg');
      background-position: center center;
      background-size: cover;
    }
    &-mask{}
  }
}
</style>
