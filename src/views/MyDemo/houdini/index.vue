<template>
  <div class="parent">
    <section class="child">鼠标悬停<br />但我不行</section>
    <section class="child">鼠标悬停<br />但是我行</section>
    <section class="child">鼠标悬停<br />color position</section>
    <section class="child">鼠标悬停<br />hls color change</section>
    <section class="child">
      <div class="rainbow" style="--index: 0"></div>
      <div class="rainbow" style="--index: 1"></div>
      <div class="rainbow" style="--index: 2"></div>
      <div class="rainbow" style="--index: 3"></div>
      <div class="rainbow" style="--index: 4"></div>
      <div class="rainbow" style="--index: 5"></div>
      <div class="rainbow" style="--index: 6"></div>
    </section>
    <div class="child">背景渐变动画<br />旋转</div>
  </div>
</template>

<script>
export default {
  name: 'houdiniApi'
}
</script>

<style>
:root {
  --start-color1: red;
  --end-color1: black;
}

@keyframes huechange {
  to {
    --color-hue: 360;
  }
}

@property --color-pos {
  syntax: '<length>|<length-percentage>|<percentage>';
  inherits: false;
  initial-value: 90%;
}

@property --color-hue {
  syntax: '<integer>';
  inherits: false;
  initial-value: 0;
}

@property --start-color {
  syntax: '<color>';
  inherits: false;
  initial-value: orange;
}

@property --end-color {
  syntax: '<color>';
  inherits: false;
  initial-value: black;
}

.parent {
  height: 100%;
  width: 1000px;
  margin: 0 atuo;
  color: white;
  display: flex;
}

.child {
  height: 300px;
  flex: 1;
  margin-right: 10px;
  transition: --start-color 1s, --start-color1 1s, --color-pos 1s, --color-b 1s;
}

.child:nth-child(1) {
  background-image: linear-gradient(
    to bottom,
    var(--start-color1),
    var(--end-color1)
  );
}

.child:nth-child(1):hover {
  --start-color1: green;
}

.child:nth-child(2) {
  background-image: linear-gradient(
    to bottom,
    var(--start-color),
    var(--end-color)
  );
}

.child:nth-child(2):hover {
  --start-color: blue;
}

.child:nth-child(3) {
  background-image: linear-gradient(
    to bottom,
    #f05b72 0,
    black var(--color-pos),
    #f05b72 100%
  );
}
.child:nth-child(3):hover {
  --color-pos: 10%;
}

.child:nth-child(4) {
  background-color: hsl(var(--color-hue), 80%, 50%);
}

.child:nth-child(4):hover {
  animation: huechange 2s infinite linear;
}

.child:nth-child(5) {
  display: flex;
}

.child:nth-child(5) .rainbow {
  flex: 1;
  background-color: hsl(var(--color-hue), 80%, 50%);
  animation: huechange 2s calc(var(--index, 0) * -0.2s) infinite linear;
}
.child:nth-child(6) {
  --direc: 0deg;
  background: linear-gradient(var(--direc), rgba(241,167,208,1) 0%, rgba(241,167,208,1) 2%, rgba(224,253,255,1) 100%);
  animation: spinaaa 3s linear infinite;
}
@property --direc {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}
@keyframes spinaaa {
  to {--direc:360deg}
}
</style>
