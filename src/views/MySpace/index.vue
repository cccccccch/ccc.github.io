<template>
  <div class="MySpace w-full">
    <meta name="referrer" content="no-referrer" />
    <section class="MySpace-bgc h-full w-full">
      <div class="MySpace-bgc-img h-full w-full"></div>
      <div class="MySpace-bgc-mask"></div>
      <div class="MySpace-main">
        <div class="MySpace-main-left">left</div>
        <div class="MySpace-main-item">
          <div class="top">toptotp</div>
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
            <div class="item">
              <div class="top">
                <div class="animation GIF">
                  <img src="../../assets/space/1684318263629.gif" alt="" />
                </div>
              </div>
              <div class="foot">666</div>
            </div>
          </div>
        </div>

        <div class="MySpace-main-right">right</div>
      </div>
    </section>
    <horoscopeDialog v-model="value"/>
    <!-- <Sdialog :bgc="bgc" :diaLogShow="dialogTableVisible" @update:diaLogShow="dialogTableVisible=$event"> -->
    <Sdialog :bgc="bgc" :diaLogShow.sync="dialogTableVisible">
      <template slot="title">{{ date }}</template>
    </Sdialog>
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
export default {
  name: 'MySpace',
  components: { Sdialog, ClockDate, horoscopeDialog },
  data () {
    return {
      horoscopeSvg: horoscope,
      img: require('@/assets/space/afflatus.json'),
      bgc: 1,
      timer: '',
      value: true,
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
      background-image: url('../../assets/home/IMG_20210904_072527.jpg');
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
    }
    &-right {
      width: 20vw;
    }
    &-item {
      flex: 1;
      .top {
        height: 10rem;
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
            #horoscope{
              background-color: #fff;
              opacity: .7;
            }
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
