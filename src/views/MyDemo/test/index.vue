<template>
  <div class="DemoTest">
    <div class="item1 item">
      <button>1111111111111111111test页面</button>
      <div class="main" id="main">
        <div class="countdown_3d"></div>
      </div>
      <div class="slideshow">
        <div class="slideshow-img">
          <img class="slideshow-item" src="../../../assets/space/constellation/aquarius.png" alt="">
          <img class="slideshow-item" src="../../../assets/space/constellation/aries.png" alt="">
          <img class="slideshow-item" src="../../../assets/space/constellation/cancer.png" alt="">
          <img class="slideshow-item" src="../../../assets/space/constellation/capricorn.png" alt="">
          <img class="slideshow-item" src="../../../assets/space/constellation/gemini.png" alt="">
          <img class="slideshow-item" src="../../../assets/space/constellation/leo.png" alt="">
          <img class="slideshow-item" src="../../../assets/space/constellation/libra.png" alt="">
          <img class="slideshow-item" src="../../../assets/space/constellation/pisces.png" alt="">
          <img class="slideshow-item" src="../../../assets/space/constellation/virgo.png" alt="">
          <img class="slideshow-item" src="../../../assets/space/constellation/sagittarius.png" alt="">
          <img class="slideshow-item" src="../../../assets/space/constellation/scorpio.png" alt="">
          <img class="slideshow-item" src="../../../assets/space/constellation/taurus.png" alt="">
        </div>
        <i class="Icon left-Icon el-icon-d-arrow-left" @click="leftClik"></i>
        <i class="Icon right-Icon el-icon-d-arrow-right" @click="rightClik"></i>
      </div>
    </div>
    <div class="item2 item">
      <div class="box1">
        <img
          class="p1"
          src="../../../assets/space/constellation/aquarius.png"
          alt=""
        />
      </div>
      <div class="box2">
        <img
          class="p2"
          src="../../../assets/space/constellation/aquarius.png"
          alt=""
        />
        <img
          class="p3"
          src="../../../assets/space/constellation/aquarius.png"
          alt=""
        />
        <img
          class="p4"
          src="../../../assets/space/constellation/aquarius.png"
          alt=""
        />
        <img
          class="p5"
          src="../../../assets/space/constellation/aquarius.png"
          alt=""
        />
        <img
          class="p6"
          src="../../../assets/space/constellation/aquarius.png"
          alt=""
        />
        <img
          class="p7"
          src="../../../assets/space/constellation/aquarius.png"
          alt=""
        />
      </div>
    </div>
    <div class="item3 item">
        <div class="loading">
          <div class="circle-body">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
          <div class="circle-loading">
            Loading
            <span class="loading__dot">.</span>
            <span class="loading__dot">.</span>
            <span class="loading__dot">.</span>
          </div>
        </div>
        <svg class="icon" width="200" height="200">
        <!-- <line
          class="lineP"
          x1="0"
          y1="50%"
          x2="50%"
          y2="50%"
          stroke-width="3"
          stroke="#000"
        ></line> -->
        <circle class="lineP" cx="50%" cy="50%" r="40%" />
      </svg>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap-trial'
import slideshow from '@/mixin/slideshow.js'
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger'
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother'
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
export default {
  name: 'DemoTest',
  mixins: [slideshow],
  data () {
    return {
      arr: {
        minWidth: 700,
        animationKey: null,
        timeout: null,
        countdown: document.getElementsByClassName('countdown_3d')
      },
      innerArr: {
        width: 0,
        height: 0
      },
      stop: false
    }
  },
  mounted () {
    // loadJs(
    //   'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js'
    // ).then(() => {
    //   this.animationImg()
    // })
    // loadJs('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js')
    this.animationImg()
    this.init()
  },
  beforeDestroy () {
    this.stop = true
    clearTimeout(this.arr.timeout)
    window.cancelAnimationFrame(this.arr.animationKey)
  },
  methods: {
    animationImg () {
      ScrollTrigger.create({
        trigger: '.item2',
        start: 'top top',
        end: '+=1000',
        scrub: true,
        // markers: true,
        pin: true,
        animation: gsap
          .timeline()
          .fromTo(
            '.box1',
            { transform: 'translateY(0) scale(100%)' },
            { transform: 'translateY(-30vh) scale(200%)' }
          )
          .fromTo('.box1', { opacity: '1' }, { opacity: '0' })
          .fromTo(
            '.box2',
            { opacity: '0', transform: 'scale(300%)' },
            { opacity: '1', transform: 'scale(100%)' }
          )
      })
    },
    init () {
      if (this.stop) return
      this.innerArr.width = window.innerWidth * 0.5
      // this.innerArr.height = window.innerHeight * 0.5
      this.innerArr.height = '200'
      this.arr.countdown = document.getElementsByClassName('countdown_3d')
      this.onresize()
      this.pathAnimation()
    },
    pathAnimation () {
      const paths = document.querySelectorAll('.icon .lineP')
      paths.forEach(path => {
        const len = path.getTotalLength()
        path.style.setProperty('--l', len + 1)
      })
    },
    onresize () {
      if (this.stop) return
      const { countdown, animationKey } = this.arr
      let { width, height } = this.innerArr
      if (width < this.minWidth) {
        width = this.minWidth
      } else {
        if (window.innerWidth < width) {
          width = window.innerWidth
        }
        if (window.innerHeight < height) {
          height = window.innerHeight
        }
      }
      try {
        var main = document.querySelector('#main')
        if (main) {
          main.style.width = width + 'px'
          main.style.height = height + 'px'
          main.style.margin = '0 auto'
          // let marginTB = (window.innerHeight - height) / 2
          // marginTB = marginTB < 0 ? 0 : marginTB
          // let marginLR = (window.innerWidth - width) / 2
          // marginLR = marginLR < 0 ? 0 : marginLR
          // main.style.margin = marginTB + 'px ' + marginLR + 'px'
        }
        if (countdown) {
          const w = (width - width * 0.2) / 6
          countdown[0].style.setProperty('--w', w.toFixed(2) + 'px')
          let lastTime = new Date().getTime()
          this.setHtml()
          const animateFunction = () => {
            const curTime = new Date().getTime()
            if (curTime - lastTime >= 1000) {
              this.setHtml()
              lastTime = curTime
            }
            this.arr.animationKey = requestAnimationFrame(animateFunction)
          }
          animateFunction()
        }
      } catch (err) {
        if (animationKey) {
          window.cancelAnimationFrame(animationKey)
        }
      }
    },
    getTime () {
      if (this.stop) return
      const newTime = new Date()

      const year = newTime.getFullYear()

      const month = newTime.getMonth() + 1
      const _month = month < 10 ? '0' + month : month
      let nMonth = (month + 1) % 12
      nMonth = nMonth < 10 ? '0' + nMonth : nMonth

      let day = newTime.getDate()
      day = day < 10 ? '0' + day : day
      let tomorrow = new Date(newTime.getTime() + 24 * 60 * 60 * 1000).getDate()
      tomorrow = tomorrow < 10 ? '0' + tomorrow : tomorrow

      const hour = newTime.getHours()
      const _hour = hour < 10 ? '0' + hour : hour
      let nHour = (newTime.getHours() + 1) % 60
      nHour = nHour < 10 ? '0' + nHour : nHour

      const minute = newTime.getMinutes()
      const _minute = minute < 10 ? '0' + minute : minute
      let nMinute = (newTime.getMinutes() + 1) % 60
      nMinute = nMinute < 10 ? '0' + nMinute : nMinute

      const second = newTime.getSeconds()
      const _second = second < 10 ? '0' + second : second
      let nSecond = (newTime.getSeconds() + 1) % 60
      nSecond = nSecond < 10 ? '0' + nSecond : nSecond

      const times = [
        {
          label: 'year',
          time: year,
          next: year + 1
        },
        {
          label: 'month',
          time: _month,
          next: nMonth
        },
        {
          label: 'day',
          time: day,
          next: tomorrow
        },
        {
          label: 'hour',
          time: _hour,
          next: nHour
        },
        {
          label: 'minute',
          time: _minute,
          next: nMinute
        },
        {
          label: 'second',
          time: _second,
          next: nSecond
        }
      ]
      return JSON.parse(JSON.stringify(times))
    },
    updateTime () {
      if (this.stop) return
      const times = this.getTime()
      for (let i = 0; i < times.length; i++) {
        const wrapper = document.getElementsByClassName('wrapper')[i]
        if (wrapper) {
          const block = [...wrapper.childNodes].find(
            item => item.classList && item.classList.contains('block')
          )
          if (times[i].time !== this.curTimes[i].time) {
            if (!wrapper.classList.contains('rotate')) {
              wrapper.classList.add('rotate')
              this.arr.timeout = setTimeout(() => {
                wrapper.classList.remove('rotate')
                this.curTimes[i] = {
                  ...times[i]
                  // time: times[i].next,
                  //   next: times[i].time
                }
                block.setAttribute('content-before', times[i].time)
                block.setAttribute('content-after', times[i].next)
              }, 500)
            }
          }
        }
      }
    },
    setHtml () {
      if (this.stop) return
      if (document.getElementsByClassName('wrapper').length < 1) {
        this.curTimes = this.getTime()
        var curTimes = this.curTimes
        let str = ''
        for (let i = 0; i < curTimes.length; i++) {
          str += `<div class="wrapper">
            ${
              curTimes[i].label === 'year'
                ? '<div class="rabbit"><div class="head"></div><div class="body"><div class="foot"></div></div></div>'
                : curTimes[i].label === 'month'
                ? '<div class="radish"></div>'
                : ''
            }
            <div class="block" content-before=${
              curTimes[i].time
            } content-after=${curTimes[i].next}></div>
            </div>
          `
        }
        if (this.arr.countdown) {
          this.arr.countdown[0].innerHTML = str
        }
      } else {
        this.updateTime()
      }
    }
  }
}
// class Timergenerator {
//   constructor (options) {
//     this.options = options
//     this.minWidth = 700
//     this.animationKey = null
//     this.timeout = null
//     this.countdown = document.getElementsByClassName('countdown_3d')
//     this.init()
//   }
//   init () {
//     this.onresize()
//     window.onresize = this.onresize.bind(this)
//   }
//   onresize () {
//     const { countdown, animationKey, onresize, options } = this
//     let { width, height } = options.getWidth()
//     if (width < this.minWidth) {
//       width = this.minWidth
//     } else {
//       if (window.innerWidth < width) {
//         width = window.innerWidth
//       }
//       if (window.innerHeight < height) {
//         height = window.innerHeight
//       }
//     }

//     try {
//       const main = document.getElementsByClassName('main')[0]
//       if (main) {
//         main.style.width = width + 'px'
//         main.style.height = height + 'px'
//         let marginTB = (window.innerHeight - height) / 2
//         marginTB = marginTB < 0 ? 0 : marginTB
//         let marginLR = (window.innerWidth - width) / 2
//         marginLR = marginLR < 0 ? 0 : marginLR
//         main.style.margin = marginTB + 'px ' + marginLR + 'px'
//       }
//       if (countdown) {
//         const w = (width - width * 0.2) / 6
//         countdown[0].style.setProperty('--w', w.toFixed(2) + 'px')
//         let lastTime = new Date().getTime()
//         this.setHtml()
//         const animateFunction = () => {
//           const curTime = new Date().getTime()
//           if (curTime - lastTime >= 1000) {
//             this.setHtml()
//             lastTime = curTime
//           }
//           this.animationKey = requestAnimationFrame(animateFunction)
//         }
//         animateFunction()
//       }
//     } catch (err) {
//       if (animationKey) {
//         window.cancelAnimationFrame(animationKey)
//       }
//     }
//   }
//   getTime () {
//     const newTime = new Date()

//     const year = newTime.getFullYear()

//     const month = newTime.getMonth() + 1
//     const _month = month < 10 ? '0' + month : month
//     let nMonth = (month + 1) % 12
//     nMonth = nMonth < 10 ? '0' + nMonth : nMonth

//     let day = newTime.getDate()
//     day = day < 10 ? '0' + day : day
//     let tomorrow = new Date(newTime.getTime() + 24 * 60 * 60 * 1000).getDate()
//     tomorrow = tomorrow < 10 ? '0' + tomorrow : tomorrow

//     const hour = newTime.getHours()
//     const _hour = hour < 10 ? '0' + hour : hour
//     let nHour = (newTime.getHours() + 1) % 60
//     nHour = nHour < 10 ? '0' + nHour : nHour

//     const minute = newTime.getMinutes()
//     const _minute = minute < 10 ? '0' + minute : minute
//     let nMinute = (newTime.getMinutes() + 1) % 60
//     nMinute = nMinute < 10 ? '0' + nMinute : nMinute

//     const second = newTime.getSeconds()
//     const _second = second < 10 ? '0' + second : second
//     let nSecond = (newTime.getSeconds() + 1) % 60
//     nSecond = nSecond < 10 ? '0' + nSecond : nSecond

//     const times = [
//       {
//         label: 'year',
//         time: year,
//         next: year + 1
//       },
//       {
//         label: 'month',
//         time: _month,
//         next: nMonth
//       },
//       {
//         label: 'day',
//         time: day,
//         next: tomorrow
//       },
//       {
//         label: 'hour',
//         time: _hour,
//         next: nHour
//       },
//       {
//         label: 'minute',
//         time: _minute,
//         next: nMinute
//       },
//       {
//         label: 'second',
//         time: _second,
//         next: nSecond
//       }
//     ]
//     return JSON.parse(JSON.stringify(times))
//   }
//   updateTime () {
//     const times = this.getTime()
//     for (let i = 0; i < times.length; i++) {
//       const wrapper = document.getElementsByClassName('wrapper')[i]
//       if (wrapper) {
//         const block = [...wrapper.childNodes].find(
//           item => item.classList && item.classList.contains('block')
//         )
//         if (times[i].time != this.curTimes[i].time) {
//           if (!wrapper.classList.contains('rotate')) {
//             wrapper.classList.add('rotate')
//             this.timeout = setTimeout(() => {
//               wrapper.classList.remove('rotate')
//               this.curTimes[i] = {
//                 ...times[i]
//                 // time: times[i].next,
//                 //   next: times[i].time
//               }
//               block.setAttribute('content-before', times[i].time)
//               block.setAttribute('content-after', times[i].next)
//             }, 500)
//           }
//         }
//       }
//     }
//   }
//   setHtml () {
//     if (document.getElementsByClassName('wrapper').length < 1) {
//       this.curTimes = this.getTime()
//       const { curTimes } = this
//       let str = ''
//       for (let i = 0; i < curTimes.length; i++) {
//         const current = curTimes[i]
//         str +=
//           `<div class="wrapper">
//                 ` +
//           (current.label === 'year'
//             ? `<div class="rabbit">
//                 <div class="head"></div>
//                 <div class="body"><div class="foot"></div>
//                 </div>
//                 </div>`
//             : '') +
//           (current.label === 'month' ? `<div class="radish"></div>` : '') +
//           `
//                     <div class="block" content-before="` +
//           current.time +
//           `'content-after='` +
//           current.next +
//           `"></div>
//                 </div>`
//         if (this.countdown) {
//           this.countdown[0].innerHTML = str
//         }
//       }
//     } else {
//       this.updateTime()
//     }
//   }
// }
// new Timergenerator({
//   getWidth: () => ({
//     width: window.innerWidth * 0.8,
//     height: window.innerHeight * 0.8
//   })
// })
</script>
<style scoped lang="scss">
@import url('./loading.scss');
.item {
  height: 100vh;
  background-color: #000;
}
.item1 {
  height: calc(100vh - 95px);
  background-color: skyblue;
}
.item2 {
  background-color: pink;
  width: 100%;
  position: relative;
  .box1 {
    opacity: 1;
    height: 100%;
    width: 50vw;
    margin: 0 auto;
    position: absolute;
    inset: 0;
    img {
      width: 20vw;
      height: 20vw;
      position: absolute;
      left: 15vw;
      top: calc(50vh - 10vw);
    }
  }
  .box2 {
    height: 40vw;
    width: 40vw;
    position: absolute;
    top: calc(50% - 20vw);
    left: calc(50% - 20vw);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    img {
      width: 12vw;
      height: 12vw;
    }
    transform: scale(300%);
    opacity: 0;
  }
}

.main {
  padding: 30px;
  box-sizing: border-box;

  .countdown_3d {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ::v-deep .wrapper {
      width: var(--w);
      height: var(--w);
      border-radius: 5px;
      position: relative;
      box-sizing: border-box;
      perspective: calc(var(--w) * 5);
      transform-style: preserve-3d;

      .block {
        width: 100%;
        height: 100%;
        color: #333;
        font-weight: 800;
        position: absolute;
        transform-style: preserve-3d;
        transform-origin: center;
        // transform: rotateX(45deg);
        transform-origin: calc(var(--w) / 2) calc(var(--w) / 2) 0;
        font-size: calc(var(--w) / 3);

        &::before {
          content: attr(content-before);
          display: flex;
          background-color: white;
          justify-content: center;
          align-items: center;
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 2;
          transform: translateZ(calc(var(--w) / 2));
          border: 1px solid #efefef;
          box-sizing: border-box;
          text-shadow: 0px 0px 0 #fff, -1px -1px 0 #fff, -2px -2px 0 #fff,
            -3px -3px 0 #fff, -4px -4px 0 #fff, -5px -5px 5px rgb(0, 0, 0),
            -5px -5px 1px rgb(0, 0, 0), 0 0 15px #f2a54d;
          box-shadow: 3px 3px 5px 3px rgb(217, 216, 216);
        }

        &::after {
          content: attr(content-after);
          background-color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          width: 100%;
          height: 100%;
          bottom: -50%;
          transform-origin: center;
          transform: rotateX(-90deg);
          z-index: 1;
          border: 1px solid #efefef;
          box-sizing: border-box;
          opacity: 0;
          text-shadow: 0px 0px 0 #fff, -1px -1px 0 #fff, -2px -2px 0 #fff,
            -3px -3px 0 #fff, -4px -4px 0 #fff, -5px -5px 5px rgb(0, 0, 0),
            -5px -5px 1px rgb(0, 0, 0), 0 0 15px #f2a54d;
          box-shadow: 3px 3px 5px 3px rgb(217, 216, 216);
        }
      }

      &:nth-child(1) {
        width: calc(var(--w) * 0.8);
        height: calc(var(--w) * 0.8);
        bottom: calc(0px - var(--w) * 0.15);
        animation: pullRadish 0.5s ease-in-out alternate infinite;
        z-index: 2;

        .block {
          &::before,
          &::after {
            border-radius: 100%;
            font-size: calc(var(--w) * 4 / 17);
          }
        }

        .rabbit {
          width: var(--w);
          height: var(--w);
          position: absolute;
          top: calc(0px - var(--w) / 1.2);

          .head {
            width: calc(var(--w) / 2 + 15px);
            height: calc(var(--w) / 2);
            border-radius: 100%;
            background-color: #fff;
            position: relative;
            box-shadow: inset 3px 3px 16px 0 rgb(218, 217, 217);
            border: 1px solid rgb(226, 224, 224);

            &::before {
              --w1: calc(var(--w) * 0.1 - 3px);
              --h1: calc(var(--w) * 0.1);
              content: '';
              display: block;
              width: var(--w1);
              height: var(--h1);
              border-radius: 100%;
              background-color: black;
              position: absolute;
              right: calc(var(--h1) * 2);
              top: calc(var(--h1) * 2);
              transform: rotateZ(-10deg);
              box-shadow: inset 3px 3px 0 0 white;
              animation: winking 2s ease-in infinite;
              border: 1px solid rgb(226, 224, 224);
            }

            &::after {
              content: '';
              display: block;
              position: absolute;
              top: calc(0px - var(--w) / 3);
              width: calc(var(--w) / 5);
              height: calc(var(--w) / 2);
              border-radius: 44px;
              background-color: #f7d2da;
              transform: rotate(-75deg);
              transform-origin: bottom;
              box-shadow: inset 3px 3px 16px 0 rgb(218, 217, 217),
                inset calc(var(--w) / 8) calc(var(--w) / 8) 0 0 #fff;
              animation: pullRadish-ear 0.5s ease-in-out alternate infinite;
            }
          }

          .body {
            width: calc(var(--w) / 2 + 10px);
            height: calc(var(--w) / 2);
            background-color: #fff;
            border-top-left-radius: 100%;
            border-top-right-radius: 100%;
            border-bottom-left-radius: 80%;
            border-bottom-right-radius: 80%;
            transform: rotate(-35deg);
            transform-origin: top;
            position: relative;
            box-shadow: inset 3px 3px 16px 0 rgb(218, 217, 217);
            border: 1px solid rgb(226, 224, 224);

            &::before {
              content: '';
              display: block;
              width: calc(var(--w) / 3);
              height: calc(var(--w) / 6);
              border-radius: 100%;
              background-color: #fff;
              position: absolute;
              right: -20px;
              top: 15px;
              animation: pullRadish-hand 0.5s ease-in-out alternate infinite;
              border: 1px solid rgb(226, 224, 224);
              border-left: none;
              border-bottom: none;
            }

            &::after {
              content: '';
              display: block;
              width: calc(var(--w) / 4);
              height: calc(var(--w) / 4);
              border-radius: 100%;
              background-color: #fff;
              position: absolute;
              left: calc(0px - var(--w) / 4 + 5px);
              top: 5px;
              box-shadow: inset 3px 3px 16px 0 rgb(218, 217, 217);
              border: 1px solid rgb(226, 224, 224);
            }

            .foot {
              display: block;
              width: calc(var(--w) / 3);
              height: calc(var(--w) / 6);
              border-radius: 100%;
              background-color: #fff;
              position: absolute;
              right: -10px;
              bottom: -15px;
              transform: rotate(25deg);
              transform-origin: top;
              animation: pullRadish-foot 0.5s ease-in-out alternate infinite;
              border: 1px solid rgb(226, 224, 224);
              border-top: none;
              border-bottom: none;
            }
          }
        }
      }

      &:nth-child(2) {
        z-index: 1;

        .radish {
          --width: calc(var(--w) * 0.4);
          --height: calc(var(--w) * 0.9);
          position: absolute;
          width: var(--width);
          height: var(--height);
          transform: rotate(-55deg);
          top: calc(0px - var(--height) / 3);
          left: calc(0px - var(--width) / 3);
          animation: radish 0.5s ease-in-out alternate infinite;

          &::before {
            --w1: calc(var(--w) * 0.06);
            --h1: calc(var(--w) * 0.3);
            content: '';
            display: block;
            position: absolute;
            width: var(--w1);
            height: var(--h1);
            top: calc(0px - var(--h1) / 2);
            left: calc(50% - var(--w1) * 3 / 2);
            border-radius: 8px;
            background-color: #94e76b;
            box-shadow: 1px 3px 3px 2px #52e10b,
              calc(var(--w1) + 1px) -8px 0 0 #94e76b,
              calc(var(--w1) + 2px) -3px 3px 2px #52e10b,
              calc(var(--w1) * 2 + 1px) 0px 0 0 #94e76b;
          }

          &::after {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            border-top-left-radius: 70%;
            border-top-right-radius: 70%;
            border-bottom-left-radius: 100%;
            border-bottom-right-radius: 100%;
            background-color: #f2a54d;
            box-shadow: inset 16px 3px 5px 0 #f58e1a;
          }
        }

        .block {
          &::before,
          &::after {
            border-top-left-radius: 50%;
          }
        }
      }

      &.rotate {
        .block {
          animation: rotate 0.49s linear 1;
          animation-fill-mode: forwards;

          &::after {
            animation: show 0.49s linear 1;
          }
        }
      }
    }
  }
}

@keyframes rotate {
  from {
    transform: rotateX(0deg);
  }

  to {
    transform: rotateX(90deg);
  }
}

@keyframes show {
  to {
    opacity: 1;
  }
}

@keyframes pullRadish {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-25deg);
  }
}

@keyframes pullRadish-hand {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(25deg);
  }
}

@keyframes pullRadish-foot {
  from {
    transform: rotate(15deg);
  }

  to {
    transform: rotate(45deg);
  }
}

@keyframes pullRadish-ear {
  from {
    transform: rotate(-55deg);
  }

  to {
    transform: rotate(-95deg);
  }
}

@keyframes radish {
  from {
    left: calc(0px - var(--width) / 3);
  }

  to {
    left: calc(0px - var(--width));
  }
}

@keyframes winking {
  0% {
    top: calc(var(--h1) * 2);
    height: var(--h1);
    box-shadow: inset 3px 3px 0 0 white;
  }

  29% {
    top: calc(var(--h1) * 2.5);
    height: 0;
    box-shadow: inset 3px 3px 0 0 white;
  }

  30% {
    top: calc(var(--h1) * 2.5);
    height: 0;
    box-shadow: none;
  }

  60% {
    top: calc(var(--h1) * 2.5);
    height: 0;
    box-shadow: none;
  }

  61% {
    top: calc(var(--h1) * 2.5);
    height: 0;
    box-shadow: inset 3px 3px 0 0 white;
  }

  90% {
    top: calc(var(--h1) * 2);
    height: var(--h1);
    box-shadow: inset 3px 3px 0 0 white;
  }
}
.icon{
  display: block;
  margin: 0 auto;
}
.lineP {
  stroke: rgba(255, 255, 255, .5);
  transition: 1s;
  user-select: none;
  cursor: default;
  &:hover{
    transition: 0s;
    stroke: #0f0;
    text-shadow: 0 0 120px #0f0;
  }
  stroke-dasharray: var(--l); //虚线 数值越大 空心与实心线条越大
  stroke-dashoffset: var(--l); //偏移量
  animation: stroke 3s forwards infinite;
  fill: none; //填充
  stroke-width: 5; //线头宽度
  stroke-linecap: round; //线头形状
  @keyframes stroke {
    to {
      stroke-dashoffset: 0;
    }
  }
}
</style>
