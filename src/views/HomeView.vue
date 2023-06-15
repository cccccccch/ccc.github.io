<template>
  <div class="home">
    <div class="home-bgc">
      <img
        class="home-bgc-img"
        src="@/assets/home/IMG_20210703_171550.jpg"
        alt=""
      />
      <div class="text">
        <div class="logo">
          <img src="@/assets/home/logo.png" alt="" />
        </div>
        <div class="txt">
          <p>小程记录屋</p>
        </div>
      </div>
      <div class="title">
        <a href="#">Follow Your Heart </a>
        <p><i>今</i><i>天</i><i>也</i><i>要</i><i>加</i><i>油</i><i>啊</i></p>
      </div>
      <div class="main" @click="$router.push('/myspace')" title="点我试试呀">
        <div class="main-title">
          <i class="el-icon-arrow-right"></i>
          <i class="el-icon-arrow-right"></i>
          <i class="el-icon-arrow-right"></i>
          <i class="el-icon-arrow-right"></i>
          <p>又是充满希望的一天啊</p>
          <i class="el-icon-arrow-left"></i>
          <i class="el-icon-arrow-left"></i>
          <i class="el-icon-arrow-left"></i>
          <i class="el-icon-arrow-left"></i>
        </div>
      </div>
    </div>
    <div class="home-line">
      <span v-for="index of 20" :key="index"></span>
    </div>
    <div class="home-footer">
      <section class="spikes">
        <div class="links-of-author">
          <span class="links-of-author-item">
            <a
              href="https://github.com/cccccccch"
              title="GitHub → https://github.com/cccccccch"
              rel="noopener"
              target="_blank"
              ><i class="github fa-fw"
                ><svg
                  t="1681559758057"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2603"
                  width="16"
                  height="16"
                >
                  <path
                    d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
                    p-id="2604"
                  ></path></svg></i
              >GitHub</a
            >
          </span>
          <span class="links-of-author-item">
            <a
              href="mailto:17779143909@163.com"
              title="E-Mail → mailto:17779143909@163.com"
              rel="noopener"
              target="_blank"
              ><i class="fa fa-envelope fa-fw">
                <svg
                  t="1681560188362"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="912"
                  width="16"
                  height="16"
                >
                  <path
                    d="M650.666667 674.133333A213.333333 213.333333 0 1 1 725.333333 512v106.666667a64 64 0 0 0 128 0V512a341.333333 341.333333 0 1 0-189.781333 305.92 42.666667 42.666667 0 0 1 37.930667 76.458667A425.045333 425.045333 0 0 1 512 938.666667C276.352 938.666667 85.333333 747.648 85.333333 512S276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667v106.666667a149.333333 149.333333 0 0 1-288 55.466666zM512 640a128 128 0 1 0 0-256 128 128 0 0 0 0 256z"
                    fill="#1C1C1C"
                    p-id="913"
                  ></path></svg></i
              >E-Mail</a
            >
          </span>
          <span class="links-of-author-item">
            <a
              href="https://www.zhihu.com/people/ben-bo-ba-91-51"
              title="知乎 → https://www.zhihu.com/people/ben-bo-ba-91-51"
              rel="noopener"
              target="_blank"
              ><i class="gratipay fa-fw">
                <svg
                  t="1681560016254"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="3792"
                  width="16"
                  height="16"
                >
                  <path
                    d="M544.949 561.422s0-71.387-34.779-75.050c-34.779-3.663-142.775 0-142.775 0v-219.654h161.078s-1.83-73.219-32.949-73.219h-261.755l43.93-117.148s-65.897 3.663-89.692 45.761-98.844 252.604-98.844 252.604 25.627 10.983 67.726-20.134c42.101-31.116 56.743-86.033 56.743-86.033l76.879-3.663 1.83 223.316s-133.621-1.83-161.078 0c-27.457 1.83-42.101 75.050-42.101 75.050h203.182s-18.307 124.47-69.557 214.164c-53.085 89.692-151.929 161.078-151.929 161.078s71.387 29.287 140.947-10.983c69.557-42.101 120.811-223.316 120.811-223.316l162.912 203.182s14.643-97.013-1.83-124.47c-18.307-27.457-113.49-137.283-113.49-137.283l-42.101 36.607 29.287-120.811h177.552zM587.050 188.010l-1.83 660.793h65.897l23.795 82.37 115.321-82.37h162.912v-660.793h-366.091zM879.92 775.584h-76.879l-97.013 75.050-21.965-75.050h-20.134v-512.527h215.991v512.527z"
                    fill=""
                    p-id="3793"
                  ></path></svg></i
              >知乎</a
            >
          </span>
          <span class="links-of-author-item">
            <a
              href="https://blog.csdn.net/m0_72757616?spm=1011.2124.3001.5343"
              title="CSDN → https://blog.csdn.net/m0_72757616?spm=1011.2124.3001.5343"
              rel="noopener"
              target="_blank"
              ><i class="codiepie fa-fw"
                ><svg
                  t="1681560251482"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1375"
                  width="16"
                  height="16"
                >
                  <path
                    d="M512 1024C229.2224 1024 0 794.7776 0 512 0 229.2224 229.2224 0 512 0c282.7776 0 512 229.2224 512 512 0 282.7776-229.2224 512-512 512z m17.066667-413.525333c34.850133 4.352 68.778667 5.12 102.741333 2.0992 23.04-2.048 44.817067-8.362667 64.170667-21.9136 38.212267-26.794667 49.783467-85.1968 24.251733-123.050667-14.626133-21.7088-36.8128-30.344533-60.757333-35.498667-35.054933-7.543467-70.4512-5.751467-105.847467-3.413333-5.666133 0.3584-6.7584 3.072-7.236267 8.209067-3.072 32.682667-6.536533 65.314133-9.813333 97.962666-2.5088 24.814933-4.932267 49.629867-7.509333 75.605334z m53.4016-33.928534c1.962667-20.906667 3.6352-39.338667 5.4272-57.770666 1.553067-15.906133 3.413333-31.778133 4.727466-47.701334 0.3584-4.283733 1.553067-6.656 5.956267-6.382933 15.616 1.041067 31.709867 0.034133 46.728533 3.652267 36.488533 8.823467 48.725333 54.306133 23.3472 83.029333-15.8208 17.902933-36.7616 23.586133-59.255466 25.088-8.465067 0.546133-17.015467 0.085333-26.9312 0.085333zM512 434.295467c-2.184533-0.648533-3.5328-1.1776-4.932267-1.4336-37.717333-6.877867-75.690667-8.328533-113.646933-2.816-20.974933 3.037867-41.0112 9.489067-57.480533 23.330133-22.9888 19.319467-21.640533 46.848 4.4032 62.0032 13.056 7.594667 28.023467 12.509867 42.5984 17.288533 14.08 4.608 28.996267 6.826667 43.144533 11.264 12.5952 3.925333 14.011733 14.318933 3.584 22.306134-3.345067 2.56-7.441067 5.085867-11.537067 5.751466-11.195733 1.826133-22.698667 4.386133-33.826133 3.566934-24.098133-1.774933-48.042667-5.461333-72.5504-8.430934-1.365333 10.615467-2.935467 23.0912-4.5568 35.9424 4.181333 1.365333 7.68 2.730667 11.264 3.618134 33.9456 8.4992 68.386133 9.608533 102.912 5.12 20.087467-2.6112 39.4752-7.901867 56.695467-19.029334 28.603733-18.4832 36.693333-57.1904-4.676267-75.383466-14.506667-6.382933-30.190933-10.410667-45.482667-15.086934-11.4176-3.4816-23.313067-5.614933-34.525866-9.5232-9.7792-3.413333-11.144533-12.202667-3.037867-18.397866 4.6592-3.549867 10.717867-6.997333 16.384-7.3728a480.853333 480.853333 0 0 1 53.384533-0.853334c15.377067 0.699733 30.651733 3.549867 46.4896 5.5296L512 434.295467z m257.143467 2.048L750.933333 614.2976h54.152534c4.778667-45.636267 9.710933-90.7264 14.062933-135.8848 0.6144-6.365867 2.3552-8.840533 8.686933-9.0112 11.434667-0.273067 22.8864-1.979733 34.286934-1.570133 23.722667 0.853333 42.3936 9.728 38.4 43.264-2.901333 24.2688-5.597867 48.571733-8.2432 72.874666-1.092267 10.069333-1.826133 20.189867-2.730667 30.4128h55.330133c3.584-35.259733 7.9872-70.058667 10.496-104.994133 3.413333-47.4624-17.7664-73.3184-64.682666-80.213333-40.96-6.007467-81.339733-0.341333-121.5488 7.133866z m-483.498667 134.6048c-8.738133 1.297067-16.384 2.798933-24.098133 3.4816-25.6512 2.235733-51.319467 3.9424-76.305067-4.266667-13.909333-4.590933-24.6784-12.578133-29.7984-25.9584-7.901867-20.701867 0.887467-47.104 19.831467-60.3136 17.373867-12.117333 37.717333-15.9232 58.453333-15.9232 22.545067-0.017067 45.090133 2.423467 68.232533 3.84L307.2 432.298667c-15.069867-1.723733-29.4912-3.925333-43.997867-4.9152-41.0112-2.798933-80.64 2.6112-117.469866 20.462933-30.020267 14.557867-52.053333 36.010667-58.6752 68.130133-7.850667 38.144 11.537067 69.495467 51.7632 85.845334 19.1488 7.765333 39.287467 12.509867 60.0064 12.5952 24.746667 0.1024 49.493333-1.570133 74.205866-2.952534 3.106133-0.170667 8.311467-2.901333 8.669867-5.034666 1.979733-11.554133 2.730667-23.278933 3.9424-35.464534z"
                    fill="#2c2c2c"
                    p-id="1376"
                  ></path></svg></i
              >CSDN</a
            >
          </span>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {}
}
</script>
<style scoped lang="scss">
.home {
  cursor: url('../assets/home/dog.png'), auto;
  background: #2c3e50;
  box-sizing: content-box;
  height: 100vh;
  overflow: hidden;
  &-bgc {
    position: relative;
    height: 80vh;
    // background-color: #fff;
    overflow: hidden;
    .text {
      z-index: 4;
      position: absolute;
      left: 30px;
      top: 10px;
      color: #fff;
      display: flex;
      align-items: center;
      .logo {
        margin-right: 10px;
        img {
          width: 32px;
          height: 32px;
        }
      }
      .txt {
        p{
          font-size: 14px;
          color: skyblue;
        }
        position: relative;
        z-index: 0;
        width: 70px;
        height: 25px;
        border-radius: 1px;
        overflow: hidden;
        padding: 1rem;
        &::before {
          content: '';
          position: absolute;
          z-index: -2;
          left: -50%;
          top: -50%;
          width: 200%;
          height: 200%;
          background-color: transparent;
          background-repeat: no-repeat;
          background-position: 0 0;
          background-image: conic-gradient(
            transparent,
            rgba(168, 239, 255, 1),
            transparent 30%
          );
          animation: rotate 4s linear infinite;
        }

        &::after {
          content: '';
          position: absolute;
          z-index: -1;
          left: 2px;
          top: 2px;
          width: calc(100% - 4px);
          height: calc(100% - 4px);
          background: #6087c1;
          border-radius: 5px;
          animation: opacityChange 5s infinite linear;
        }
        @keyframes opacityChange {
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes rotate {
          100% {
            transform: rotate(1turn);
          }
        }
      }
      p {
        &:hover,
        &:focus,
        &:active {
          transform: scale(0.9);
        }
      }
    }
    &-img {
      // opacity: 0.8;
      position: absolute;
      left: 0;
      width: 100%;
      height: 80vh;
      object-fit: cover;
      z-index: 2;
    }
    .title {
      position: absolute;
      width: fit-content;
      padding: 0 1vw;
      left: 50%;
      top: 30%;
      transform: translate(-50%);
      z-index: 3;
      // background-color: rgb(0, 0, 0, 0.3);
      p {
        color: #fff;
        font-size: 14px;
        display: block;
        text-align: right;
        margin-right: 3vw;
        font-weight: 600;
        line-height: 3vw;
        i {
          font-style: normal;
          margin-right: 5px;
        }
        &:hover {
          transform: scale(1.1);
          i {
            box-shadow: 0px 0px 60px 18px rgba(255, 227, 171, 0.73);
            background-color: rgba(255, 227, 171, 0.2);
          }
        }
      }
      a {
        font-size: 5vw;
        font-weight: bold;
        font-family: sans-serif;
        text-decoration: none;
        color: transparent;
        background: url('https://wweb.dev/resources/creative-hover-effects/wave.svg')
          repeat-x #fff;
        background-position-x: 0%;
        background-position-y: 0%;
        background-size: auto;
        background-clip: border-box;
        -webkit-background-clip: text;
        background-clip: text;
        background-size: 200% 100%;
        background-position-x: 0;
        background-position-y: 2em;
        -webkit-transition: background-position-y 0.6s ease;
        transition: background-position-y 0.6s ease;
        -webkit-animation: waveAnimation 4s infinite linear;
        animation: waveAnimation 4s infinite linear;
        animation-play-state: running;
        -webkit-animation-play-state: paused;
        animation-play-state: paused;
      }

      a:hover {
        background-position-x: 0;
        background-position-y: 0;
        -webkit-animation-play-state: running;
        animation-play-state: running;
      }

      @keyframes waveAnimation {
        from {
          background-position-x: 0%;
        }
        to {
          background-position-x: 200%;
        }
      }
    }
    .main {
      // &:hover {
      //   text-indent: '555';
      // }
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translateX(-50%);
      z-index: 20;
      &-title {
        color: #fff;
        display: flex;
        align-items: flex-end;
        p {
          font-size: 16px;
          margin: 0 12px;
        }
        ::v-deep .el-icon-arrow-left {
          animation-duration: 2s;
          animation-name: left;
          animation-iteration-count: infinite;
          line-height: normal;
          font-size: 14px;
        }
        ::v-deep .el-icon-arrow-right {
          animation-duration: 2s;
          animation-name: blink;
          animation-iteration-count: infinite;
          line-height: normal;
          font-size: 14px;
        }
        @keyframes left {
          0% {
            opacity: 1;
            // transform: translateX(-1px);
          }
          25% {
            opacity: 1;
            transform: translateX(-10px);
          }
          75% {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 0;
            transform: translateX(-10px);
          }
        }
        @keyframes blink {
          0% {
            opacity: 1;
            // transform: translateX(-1px);
          }
          25% {
            opacity: 1;
            transform: translateX(10px);
          }
          75% {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 0;
            transform: translateX(10px);
          }
        }
      }
    }
  }
  &-line {
    height: 4vh;
    width: 100vw;
    background-color: rgba(255, 255, 255, 0.711);
    $particleSize: 2vmin;
    $animationDuration: 3s;
    $amount: 20;
    position: relative;
    span {
      width: $particleSize;
      height: $particleSize;
      border-radius: $particleSize;
      backface-visibility: hidden;
      position: absolute;
      animation-name: move;
      animation-duration: $animationDuration;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      // $colors: (#583c87, #e45a84, #ffacac);
      $colors: (#77c7fe, #fe7dcd, #fde7fe);
      @for $i from 1 through $amount {
        &:nth-child(#{$i}) {
          color: nth($colors, random(length($colors)));
          top: random(100) * 1%;
          left: random(100) * 1%;
          animation-duration: (random($animationDuration * 10) / 10) * 1s + 10s;
          animation-delay: random(($animationDuration + 10s) * 10) / 10 * -1s;
          transform-origin: (random(50) - 25) * 1vw (random(50) - 25) * 1vh;
          $blurRadius: (random() + 0.5) * $particleSize * 0.5;
          $x: if(random() > 0.5, -1, 1);
          box-shadow: ($particleSize * 2 * $x) 0 $blurRadius currentColor;
        }
      }
    }
    @keyframes move {
      100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
      }
    }
  }
  &-footer {
    height: 12vh;
    position: relative;
    background: #344a60;
    .spikes {
      font-family: 'Lato', 'PingFang SC', 'Microsoft YaHei', sans-serif;
      height: 12vh;
      .links-of-author {
        line-height: 12vh;
        display: flex;
        justify-content: space-evenly;
        &-item {
          a {
            text-decoration: none;
            padding-bottom: 3px;
            border-bottom: 1px solid #888;
            font-style: normal;
            color: rgb(20, 19, 19);
            font-size: 14px;
            &:hover {
              color: #fff;
              border-bottom: 1px solid #fff;
            }
            position: relative;
            &::before {
              content: '';
              position: absolute;
              top: 50%;
              left: -10px;
              transform: translateY(-50%);
              display: inline-block;
              width: 5px;
              height: 5px;
              border-radius: 50%;
              background-color: #965eba;
            }
            .fa-fw {
              margin-right: 5px;
              vertical-align: middle;
            }
          }
        }
      }
    }
    &::before {
      top: 0px;
      transform: translateY(-100%) rotate(180deg);
    }
    &::before,
    &::after {
      content: '';
      position: absolute;
      right: 0;
      left: 0;
      z-index: 10;
      display: block;
      height: 4vh;
      background-size: 4vh 100%;
      background-image: linear-gradient(
          135deg,
          rgb(52, 74, 96) 25%,
          transparent 25%
        ),
        linear-gradient(225deg, rgb(52, 74, 96) 25%, transparent 25%);
      background-position: 0 0;
    }
  }
}
</style>
