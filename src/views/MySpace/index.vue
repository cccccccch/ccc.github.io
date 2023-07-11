<template>
  <div class="MySpace w-full">
    <meta name="referrer" content="no-referrer" />
    <section class="MySpace-bgc h-full w-full">
      <div class="MySpace-bgc-img h-full w-full"></div>
      <div class="MySpace-bgc-mask"></div>
      <div class="MySpace-main">
        <div class="MySpace-main-left">left
          <div class="Adaptive-test" data-thme='light'>
              <!-- <toggleButton /> -->
              <div class="img"></div>
            </div>
        </div>
        <div class="MySpace-main-item">
          <div class="top">
            <div class="advertising"></div>
          </div>
          <div class="bottom">
            <div class="item hotsearch">
              <div class="top">
                <div class="header">
                  <el-button
                    icon="el-icon-d-arrow-left"
                    :disabled="hotsearchNum == 0"
                    @click="hotsearchNum--"
                  ></el-button>
                  <el-button
                    icon="el-icon-arrow-left"
                    :disabled="hotsearchItemNum == 0"
                    @click="hotsearchItemNum--"
                  ></el-button>
                  <span>{{ hotsearchList[hotsearchNum].text }}</span>
                  <el-button
                    icon="el-icon-arrow-right"
                    @click="hotsearchItemNum++"
                    :disabled="hotsearchItemNum == 9"
                  ></el-button>
                  <el-button
                    icon="el-icon-d-arrow-right"
                    :disabled="hotsearchNum == 9"
                    @click="hotsearchNum++"
                  ></el-button>
                </div>
                <div class="main">
                  <ul>
                    <li v-for="item in HotsearchList" :key="item.order">
                      <i
                        :class="{ one: item.order == 1, two: item.order == 2 }"
                        >{{ item.order }}</i
                      >
                      <a :title="item.title" :href="item.url" target="_blank">{{
                        item.title
                      }}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="foot">热搜</div>
            </div>
            <div class="item game">
              <div class="top">
                <GemePage @isShowGameDialog="isShowGameDialog" />
              </div>
              <div class="foot">Game</div>
            </div>
            <div class="item money">
              <div class="top">
                <img src="@/assets/20230704-174933.jpg" alt="" />
              </div>
              <div class="foot">可怜可怜孩子</div>
            </div>
            <div class="item weather" @click="dialogTableVisible = true">
              <div class="top weather-top">
                <div class="weather-top-left">
                  {{
                    WeatherHourly.data
                      ? WeatherHourly.data.hourly[0].temp
                      : '--'
                  }}°
                </div>
                <div class="weather-top-right">
                  <div class="weather-top-right-top">
                    <p>
                      {{
                        CitySearch.data
                          ? CitySearch.data.list[0].name
                          : City.data.list[0].name || '--'
                      }}
                    </p>
                    <img
                      crossOrigin="anonymous"
                      class="ml-[2px] h-[24px] w-[24px]"
                      draggable="false"
                      :src="icon"
                    />
                  </div>
                  <div class="weather-top-right-bottom">
                    <i>{{
                      WeatherHourly.data
                        ? WeatherHourly.data.hourly[0].text
                        : ''
                    }}</i>
                    {{
                      WeatherDaily.data
                        ? WeatherDaily.data.daily[0].tempMax
                        : ''
                    }}° ~
                    {{
                      WeatherDaily.data
                        ? WeatherDaily.data.daily[0].tempMin
                        : ''
                    }}°
                  </div>
                </div>
              </div>
              <div class="foot">天气</div>
            </div>
            <div class="clock item">
              <div class="top">
                <ClockDate :widthItem="200" :heightItem="70" />
              </div>
              <div class="foot">时钟</div>
            </div>
            <div class="horoscope item" @click="value = true">
              <div class="top">
                <div v-html="horoscopeSvg" id="horoscope"></div>
              </div>
              <div class="foot">星座</div>
            </div>
            <div class="item" @click="$router.push('/mydemo')">
              <div class="top">
                <div id="lottie_box" class="animation"></div>
              </div>
              <div class="foot">我的Demo</div>
            </div>
            <div class="item">
              <div class="top">
                <div id="lottie_box_two" class="animation"></div>
              </div>
              <div class="foot">酷</div>
            </div>
            <div class="item GIF">
              <div class="top">
                <div class="animation GIF-item">
                  <img src="../../assets/space/1684318263629.gif" alt="" />
                </div>
              </div>
              <div class="foot">houdini API</div>
            </div>
          </div>
        </div>

        <div class="MySpace-main-right">right</div>
      </div>
    </section>
    <horoscopeDialog v-model="value" />
    <!-- <Sdialog :bgc="bgc" :diaLogShow="dialogTableVisible" @update:diaLogShow="dialogTableVisible=$event"> -->
    <Sdialog :bgc="bgc" :diaLogShow.sync="dialogTableVisible">
      <template slot="title">{{ date }}</template>
    </Sdialog>
    <GameDialog :show="gameDialog" @showGameDialog="gameDialog = false" />
  </div>
</template>

<script>
import moment from 'moment'
import Sdialog from './components/dialog.vue'
import horoscopeDialog from './components/horoscopeDialog.vue'
import { mapActions, mapState } from 'vuex'
import ClockDate from './components/clock.vue'
import lottie from 'lottie-web'
import { horoscope } from '@/assets/space/horoscope.js'
import GemePage from './components/GemePage.vue'
import GameDialog from './components/GameDialog.vue'
// import toggleButton from '../../components/automation/toggle/index.vue'
export default {
  name: 'MySpace',
  components: { Sdialog, ClockDate, horoscopeDialog, GemePage, GameDialog },
  data () {
    return {
      gameDialog: false,
      horoscopeSvg: horoscope,
      img: require('@/assets/space/afflatus.json'),
      bgc: 1,
      timer: '',
      value: false,
      dialogTableVisible: false,
      date: moment().format('YYYY-MM-DD hh:mm:ss'),
      hotsearchItemNum: 0,
      hotsearchNum: 0,
      // hotsearchItem: this.Hotsearch.data.list.slice(0, 4),
      hotsearchList: [
        { text: '抖音', type: 'douyin' },
        { text: '微博', type: 'weibo' },
        { text: '百度', type: 'baidu' },
        { text: '知乎', type: 'zhihu' },
        { text: '微信', type: 'wechat' },
        { text: '哔哩哔哩', type: 'bilibili' },
        { text: '36氪', type: 'kr36' },
        { text: '今日头条', type: 'toutiao' },
        { text: '少数派', type: 'sspai' },
        { text: 'CSDN', type: 'csdn' }
      ],
      icon: ''
    }
  },
  created () {
    this.getData()
    this.timer = setInterval(() => {
      this.date = moment().format('YYYY-MM-DD hh:mm:ss')
    }, 1000)
  },
  mounted () {
    this.$nextTick(() => {
      lottie.loadAnimation({
        container: document.getElementById('lottie_box'), // 包含动画的dom元素
        renderer: 'svg', // 渲染出来的是什么格式
        loop: true, // 循环播放
        autoplay: true, // 自动播放
        animationData: require('@/assets/space/afflatus.json') // 动画json的本地路径
        // path:''//网络json地址, 选择 animationData 后，则不用path了，
      })
      lottie.loadAnimation({
        container: document.getElementById('lottie_box_two'), // 包含动画的dom元素
        renderer: 'svg', // 渲染出来的是什么格式
        loop: true, // 循环播放
        autoplay: true, // 自动播放
        animationData: require('@/assets/space/cool.json') // 动画json的本地路径
        // path:''//网络json地址, 选择 animationData 后，则不用path了，
      })
    })
  },
  destroyed () {
    if ((this.timer ?? '') !== '') {
      clearInterval(this.timer)
    }
  },
  filters: {
    dateZh (res) {
      return moment().format('MMMM Do YYYY, h:mm:ss a')
    }
  },
  computed: {
    ...mapState('space', [
      'Location',
      'Hotsearch',
      'City',
      'WeatherDaily',
      'WeatherHourly',
      'CitySearch'
    ]),
    HotsearchList () {
      if (this.Hotsearch.data) {
        return this.Hotsearch.data.list.slice(
          this.hotsearchItemNum * 5,
          this.hotsearchItemNum * 5 + 4
        )
      } else {
        return []
      }
    }
  },
  watch: {
    hotsearchNum (newData) {
      const type = this.hotsearchList[newData].type
      this.getHotList({ type })
    }
  },
  methods: {
    ...mapActions('space', [
      'GetLocation',
      'GetHotsearch',
      'GetWeatherDaily',
      'GetWeatherHourly'
    ]),
    async getData () {
      await this.GetHotsearch({ type: 'douyin' })
      if (!this.Location.data) {
        await this.GetLocation()
      }
      if (!this.WeatherDaily.data) {
        await this.GetWeatherDaily()
      }
      await this.GetWeatherHourly()
      if (this.WeatherHourly.data) {
        this.icon = `https://static.wetab.link/weather-icon/${this.WeatherHourly.data.hourly[0].icon}.png`
        this.bgc = this.WeatherHourly.data.hourly[0].text.includes('晴')
          ? 1
          : this.WeatherHourly.data.hourly[0].text.includes('雨')
            ? 2
            : 3
      }
      // var xml = new XMLHttpRequest()
      // xml.open(
      //   'GET',
      //   'https://api.wetab.link/api/weather/location?',
      //   false
      // )
      // xml.setRequestHeader('i-version', '0.0.35')
      // xml.setRequestHeader('i-branch', 'zh')
      // xml.send(null)
      // xml.onreadystatechange = function () {
      //   console.log(xml)
      // }
    },
    async getHotList (data) {
      await this.GetHotsearch(data)
    },
    isShowGameDialog () {
      this.gameDialog = true
    }
  }
}
</script>

<style scoped lang="scss">
.h-full {
  height: 100%;
}
.w-full {
  width: 100%;
}
.MySpace {
  box-sizing: border-box;
  height: 100vh;
  position: relative;
  &-bgc {
    &-img {
      background-image: url('../../assets/home/IMG_20210904_072527.jpg'),url('../../assets/home/IMG_BGC.jpg');
      background-position: center center;
      background-size: cover;
      transition: background-image 0.3s;
      filter: contrast(110%);
    }
    &-mask {
      display: none;
    }
  }
  &-main {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100vh;
    display: flex;
    &-left {
      width: 20vw;
      position: relative;
      .img{
        width: 10vw;
        height: 10vw;
        border-radius: 50%;
        position: absolute;
        top: calc(50% - 5vw);
        left: calc(50% - 5vw);
      }
      .Adaptive-test{
        --text-color:#333;
        --bg1:#c7ffdd;
        --bg2:#fbd988;
      }
      .Adaptive-test[data-thme='dark']{
        --text-color:#fff;
        --bg1:#2d5567;
        --bg2:#102128;
      }
      .Adaptive-test{
        position: relative;
        width: 10vw;
        height: 10vw;
        margin: 0 auto;
        text-align: center;
        border-radius: 50%;
        font-size: 0.5rem;
        letter-spacing:2px;
        // background:linear-gradient(90deg,var(--bg1),var(--bg2));
        color: var(--text-color);
        @media (prefers-color-scheme: light) {
          background:linear-gradient(0deg,#c7ffdd,#fbd988);
          color: #000;
          --text-txt:'light（自适应系统）';
          .img{
            background: url('../../assets/space/sun.png') no-repeat 50% 50%/90% 90%;
          }
        }
        @media (prefers-color-scheme: dark) {
          background:linear-gradient(0deg,#2d5567,#102128);
          color: white;
          --text-txt:'dark（自适应系统）';
          .img{
            background: url('../../assets/space/dark.png') no-repeat 50% 50%/70% 70%;
          }
        }
        @media (prefers-color-scheme: no-preference) {
          background:linear-gradient(90deg,#c7ffdd,#fbd988);
          color: #000;
          --text-txt:'light（自适应系统）';
          .img{
            background: url('../../assets/space/sun.png') no-repeat 50% 50%/90% 90%;
          }
        }
        &::before{
            content:var(--text-txt);
            position: relative;
            top: 10.5vw;
            left: 0%;
          }
      }
    }
    &-right {
      width: 20vw;
    }
    &-item {
      flex: 1;
      @keyframes moveText {
        0% {
            transform: translate(-30%, -50%);
        }
        100% {
            transform: translate(-70%, -50%);
        }
      }
      .top {
        height: 10rem;
      }
      .advertising{
        height: 5rem;
        background: linear-gradient(45deg, #000 0, #000 50%, #fff 50%,);
        position: relative;
        font-size: 20px;
        letter-spacing:20px;
        &::before {
          content: "广 告 位 出 租";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #fff;
          mix-blend-mode: difference;
          animation: moveText 3s infinite linear alternate;
        }
      }
      .bottom {
        width: 60vw;
        display: grid;
        column-gap: 60px;
        row-gap: 30px;
        grid-template-columns: repeat(auto-fill, var(--icon-size));
        --icon-size: 72px;
        justify-content: center;
        .item {
          .top {
            border-radius: 1rem;
            overflow: hidden;
            transition: transform 500ms cubic-bezier(0.26, 2, 0.46, 0.71);
            &:hover {
              transform: translate(0, -0.5em);
            }
          }
          grid-column-start: span 1;
          grid-row-start: span 1;
          width: 100px;
          height: 130px;
          .top {
            width: 100px;
            height: 100px;
          }
          .foot {
            text-align: center;
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            color: #fff;
            // mix-blend-mode: exclusion;
            text-shadow: rgb(0, 0, 0) 0px 0px 10px;
          }
        }
        .horoscope {
          .top {
            #horoscope {
              background-color: #fff;
              opacity: 0.7;
            }
          }
        }
        .money {
          grid-column-start: span 2;
          grid-row-start: span 2;
          width: 200px;
          height: 230px;
          .top {
            height: 230px;
            width: 200px;
            background-color: #fff;
            display: flex;
            flex-direction: column;
          }
        }
        .hotsearch {
          grid-column-start: span 2;
          grid-row-start: span 2;
          width: 200px;
          height: 230px;
          .top {
            height: 230px;
            width: 200px;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            img {
              width: 200px;
              height: 200px;
            }
          }
          .header {
            padding: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            background-color: #f8f8f8;
            span {
              width: 40%;
              text-align: center;
            }
            .el-button {
              padding: 0;
              border: none;
              background-color: transparent;
              &:hover {
                background-color: #ccc;
              }
            }
            .el-button.is-disabled,
            .el-button.is-disabled:focus,
            .el-button.is-disabled:hover {
              color: #ccc;
              cursor: pointer;
              background-color: #f8f8f8 !important;
            }
          }
          .main {
            flex: 1;
            font-size: 12px;
            padding: 0.7rem;
            padding-bottom: 20px;
            padding-top: 20px;
            ul {
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              li {
                display: flex;
                align-items: center;
                .one {
                  color: #ff4d4f;
                }
                .two {
                  color: #ffaa4e;
                }
                i {
                  color: #ccc;
                  vertical-align: text-bottom;
                  font-weight: 700;
                  transform: scale(0.9);
                  width: 1.4rem;
                  // margin-right: 5px;
                  font-style: normal;
                }
                a {
                  flex: 1;
                  // font-style: normal;
                  color: #000;
                  text-decoration: none;
                  opacity: 0.8;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  &:hover {
                    opacity: 1;
                    color: #4a7aff;
                  }
                }
              }
            }
          }
        }
        .clock {
          grid-column-start: span 2;
          grid-row-start: span 1;
          width: 200px;
          height: 100px;
          .top {
            width: 200px;
            height: 70px;
          }
        }
        .game {
          grid-column-start: span 2;
          grid-row-start: span 2;
          width: 200px;
          height: 230px;
          .top {
            height: 230px;
            width: 200px;
            display: flex;
            flex-direction: column;
          }
        }
        @property --direc {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes spin {
          to {--direc:360deg}
        }
        .GIF {
          .top {
            display: flex;
            align-items: center;
            justify-content: center;
            --direc: 0deg;
            background: linear-gradient(var(--direc), rgba(241,167,208,1) 0%, rgba(241,167,208,1) 2%, rgba(224,253,255,1) 100%);
            animation: spin 3s linear infinite;
            .GIF-item {
              height: 90%;
              width: 90%;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: #fff;
              border-radius: 1rem;
              img {
                width: 90px;
                height: 80px;
                border-radius: 1rem;
              }
            }
          }
        }
        .weather {
          grid-column-start: span 2;
          grid-row-start: span 1;
          width: 200px;
          height: 100px;
          &-top {
            width: 200px !important;
            height: 70px !important;
            background: linear-gradient(225deg, #dce7f7, #cbd6e5 48%, #a5b3c5);
            display: flex;
            align-items: center;
            &-left {
              width: 40%;
              font-size: 30px;
              opacity: 0.8;
              text-align: center;
            }
            &-right {
              box-sizing: border-box;
              height: 70px;
              font-size: 14px;
              opacity: 0.8;
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              padding: 6px 0;
              div {
                height: 50%;
                line-height: 30px;
              }
              &-top {
                display: flex;
                align-items: center;
                img {
                  margin-left: 2px;
                  width: 24px;
                  height: 24px;
                }
              }
              &-bottom {
                font-size: 12px;
                i {
                  font-style: normal;
                  margin-right: 2px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
