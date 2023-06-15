<template>
  <div class="horoscopeDialog" v-show="value">
    <div class="msk"></div>
    <div class="main">
      <div class="oFF" @click="$emit('input', false)">x</div>
      <div class="main-top">
        <div class="main-top-left">
          <img :src="imgList[titleImg].img" alt="" />
          <div class="text">
            <p>{{ nowList.title }}</p>
            <p>
              {{ imgList[titleImg].time.start }}-{{
                imgList[titleImg].time.end
              }}
            </p>
          </div>
        </div>
        <div class="main-top-content">
          <div class="title">
            <button
              :class="{ 'button-active': index == buttonIndex }"
              v-for="(item, index) in timeSelect"
              :key="index"
              @click="timeSelectClick(index)"
            >
              {{ item }}
            </button>
          </div>
          <div class="content">
            <div v-for="(item, index) in titleArr" :key="index">
              {{ item.name }}
              <i>{{
                '★★★★★☆☆☆☆☆'.slice(5 - item.fortune, 10 - item.fortune)
              }}</i>
            </div>
            <div>
              健康指数: {{ nowList.index ? nowList.index.health : '--' }}
            </div>
            <div>商谈指数: {{ nowList.index ? nowList.index.work : '--' }}</div>
          </div>
          <div class="text">
            <div class="textOver">
              <i>综合运势:</i>
              {{ alltext }}...
              <a>更多详情</a>
            </div>
          </div>
        </div>
        <div class="main-top-right">{{ nowList.title }}</div>
      </div>
      <div class="main-bottom">
        <div class="title">
          <i>十二星座今日运势</i>
          <i>2023年06月13日</i>
        </div>
        <div class="content">
          <div
            class="item"
            v-for="v in NewListData"
            :key="v.data.title"
            @click="itemClick(v)"
          >
            <div class="left">
              <img :src="v.img" alt="" />
            </div>
            <div class="right">
              <div class="title">
                <i>{{ v.data.title }}</i>
                <i>{{ v.time.start }}-{{ v.time.end }}</i>
              </div>
              <div class="fortune">
                整体运势<i>{{
                  '★★★★★☆☆☆☆☆'.slice(
                    5 - v.data.fortune.all,
                    10 - v.data.fortune.all
                  )
                }}</i>
              </div>
              <div class="text">
                {{ v.data.fortunetext.all.slice(0, 22) }}...<i>-详细-</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
import { horoscopeGet } from '@/api/space'
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  name: 'horoscopeDialog',
  data () {
    return {
      step: '',
      buttonIndex: 0,
      timeSelect: [
        '今日运势',
        '明日运势',
        '本周运势',
        '本月运势',
        '今年运势',
        '爱情运势'
      ],
      titleArr: [
        { name: '综合运势', fortune: 5 },
        { name: '爱情运势', fortune: 5 },
        { name: '事业学业', fortune: 5 },
        { name: '财富运势', fortune: 5 }
      ],
      alltext: '',
      nowKey: '',
      nowList: {},
      imgList: {
        aries: {
          img: require('@/assets/space/constellation/aries.png'),
          time: { start: 3.21, end: 4.19 }
        },
        taurus: {
          img: require('@/assets/space/constellation/taurus.png'),
          time: { start: 4.20, end: 5.20 }
        },
        gemini: {
          img: require('@/assets/space/constellation/gemini.png'),
          time: { start: 5.21, end: 6.21 }
        },
        cancer: {
          img: require('@/assets/space/constellation/cancer.png'),
          time: { start: 6.22, end: 7.22 }
        },
        leo: {
          img: require('@/assets/space/constellation/leo.png'),
          time: { start: 7.23, end: 8.22 }
        },
        virgo: {
          img: require('@/assets/space/constellation/virgo.png'),
          time: { start: 8.23, end: 9.22 }
        },
        libra: {
          img: require('@/assets/space/constellation/libra.png'),
          time: { start: 9.23, end: 10.23 }
        },
        scorpio: {
          img: require('@/assets/space/constellation/scorpio.png'),
          time: { start: 10.24, end: 11.22 }
        },
        sagittarius: {
          img: require('@/assets/space/constellation/sagittarius.png'),
          time: { start: 11.23, end: 12.21 }
        },
        capricorn: {
          img: require('@/assets/space/constellation/capricorn.png'),
          time: { start: 12.22, end: 1.19 }
        },
        aquarius: {
          img: require('@/assets/space/constellation/aquarius.png'),
          time: { start: 1.20, end: 2.18 }
        },
        pisces: {
          img: require('@/assets/space/constellation/pisces.png'),
          time: { start: 2.19, end: 3.20 }
        }
      },
      nowDate: moment(new Date()).format('M.DD'),
      NewListData: []
    }
  },
  created () {
    this.getNowData('today')
    const initAllData = JSON.parse(localStorage.getItem('horoscope_initAll'))
    if (initAllData.aries.data) {
      this.imgList = initAllData
    } else {
      this.getAllData()
    }
    console.log(this.imgList, 'lissss')
    const initArr = [
      'capricorn',
      'aquarius',
      'pisces',
      'aries',
      'taurus',
      'gemini',
      'cancer',
      'leo',
      'virgo',
      'libra',
      'scorpio',
      'sagittarius'
    ]
    for (let index = 0; index < 12; index++) {
      var res = initArr[index]
      this.NewListData[index] = this.imgList[res]
    }
    console.log(this.NewListData, 'sssss')
  },
  methods: {
    itemClick (v) {
      console.log(v, 'vvvv')
      this.nowDate = v.time.start + 1
      this.setNowListData(v.data)
    },
    async getNowData (e) {
      const res = await horoscopeGet({ type: this.titleImg, time: e })
      if (res.data && res.data.data) {
        this.setNowListData(res.data.data)
      }
    },
    setNowListData (data) {
      this.nowList = data
      this.alltext = this.nowList.fortunetext.all.substr(0, 50)
      this.titleArr[0].fortune = this.nowList.fortune.all
      this.titleArr[1].fortune = this.nowList.fortune.love
      this.titleArr[2].fortune = this.nowList.fortune.work
      this.titleArr[3].fortune = this.nowList.fortune.money
    },
    timeSelectClick (e) {
      const times = ['today', 'nextday', 'week', 'month', 'year', 'love']
      this.getNowData(times[e])
      this.buttonIndex = e
    },
    getAllData () {
      const initArr = [
        'aries',
        'taurus',
        'gemini',
        'cancer',
        'leo',
        'virgo',
        'libra',
        'scorpio',
        'sagittarius',
        'capricorn',
        'aquarius',
        'pisces'
      ]
      let resItem = 0
      const getSettime = async () => {
        if (resItem >= 12) return
        this.step = initArr[resItem]
        const res = await horoscopeGet({ type: this.step, time: 'today' })
        if (res.data && res.data.data) {
          this.imgList[this.step].data = res.data.data
          localStorage.setItem(
            'horoscope_initAll',
            JSON.stringify(this.imgList)
          )
          console.log(
            JSON.parse(localStorage.getItem('horoscope_initAll')),
            'horoscope_initAll'
          )
          resItem++
          console.log(resItem)
          setTimeout(() => {
            getSettime()
          }, 5000)
        } else {
          setTimeout(() => {
            getSettime()
          }, 5000)
        }
      }
      getSettime()
    }
  },
  computed: {
    titleImg () {
      console.log(this.nowDate, 'titleImgtitleImg')
      let img = ''
      if (this.nowDate > 12.21 || this.nowDate <= 1.19) {
        return 'capricorn'
      } else {
        for (const key in this.imgList) {
          if (
            this.nowDate >= this.imgList[key].time.start &&
            this.nowDate <= this.imgList[key].time.end
          ) {
            img = key
          }
        }
        return img
      }
    }
  }
}
</script>

<style scoped lang="scss">
.horoscopeDialog {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .msk {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.8;
    z-index: 25;
  }
  .main {
    .oFF {
      position: absolute;
      top: 5px;
      left: 5px;
      font-size: 12px;
      background-color: #baeddc;
      width: 20px;
      height: 20px;
      text-align: center;
      color: #fff;
      border-radius: 50%;
      &:hover {
        background-color: #eec0a6;
      }
    }
    position: absolute;
    top: calc(50% - 300px);
    left: calc(50% - 500px);
    width: 1000px;
    height: 600px;
    z-index: 99;
    background-color: #f7f7fa;
    color: #000;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding: 10px 30px;
    &-top {
      box-sizing: border-box;
      height: 30%;
      border-radius: 5px;
      background: rgba(233, 237, 178, 0.9);
      background: gradient(
        left bottom,
        right top,
        color-stop(7%, rgba(233, 237, 178, 0.9)),
        color-stop(22%, rgba(240, 214, 192, 0.9)),
        color-stop(30%, rgba(239, 202, 177, 0.9)),
        color-stop(66%, rgba(235, 150, 108, 0.61)),
        color-stop(67%, rgba(235, 149, 106, 0.61)),
        color-stop(92%, rgba(232, 187, 97, 0.61))
      );
      background: linear-gradient(
        45deg,
        rgba(233, 237, 178, 0.9) 7%,
        rgba(240, 214, 192, 0.9) 22%,
        rgba(239, 202, 177, 0.9) 30%,
        rgba(235, 150, 108, 0.61) 66%,
        rgba(235, 149, 106, 0.61) 67%,
        rgba(232, 187, 97, 0.61) 92%
      );
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e9edb2', endColorstr='#e8bb61', GradientType=1 );
      display: flex;
      justify-content: space-between;
      padding: 10px;
      &-left {
        width: 120px;
        height: 100%;
        display: flex;
        flex-direction: column;
        img {
          width: 120px;
          height: 120px;
          margin: 0 auto;
        }
        .text {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 14px;
          font-weight: 700;
          color: #baeddc;
          & p:nth-child(2) {
            font-weight: normal;
            // margin-left: 10px;
            color: #fff;
          }
        }
      }
      &-content {
        box-sizing: border-box;
        width: calc(1000px - 250px);
        padding: 0 20px;
        font-size: 15px;
        color: #fcfafa;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .title {
          width: 600px;
          display: flex;
          justify-content: space-between;
          button {
            border: none;
            color: #fff;
            background-color: #599eab;
            width: 70px;
            height: 20px;
            border-radius: 3px;
          }
          .button-active {
            background-color: #ee8eb0;
          }
        }
        .content {
          display: flex;
          flex-wrap: wrap;
          padding-top: 10px;
          div {
            width: 30%;
            height: 30px;
            i {
              font-style: normal;
              color: rgb(245, 41, 75);
            }
          }
        }
        .text {
          width: 100%;
          height: 50px;
          div {
            width: 100%;
            // height: 100%;
          }
        }
      }
      .textOver {
        i {
          font-style: normal;
          color: #fcfafa;
        }
        a {
          color: #f16999;
          font-size: 14px;
          font-weight: normal;
        }
        color: #fff;
        font-weight: 700;
        line-height: 25px;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
      &-right {
        width: 70px;
        font-size: 14px;
        height: 30px;
        line-height: 30px;
        border-radius: 8px;
        text-align: center;
        background-color: #ee8eb0;
        color: #fff;
      }
    }
    &-bottom {
      height: 70%;
      margin-top: 20px;
      padding-top: 10px;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        box-sizing: border-box;
        left: 0;
        top: -10px;
        width: 100%;
        height: 10px;
        border: 1px solid #d7eaf6;
        border-radius: 5px;
      }
      .title {
        font-size: 16px;
        color: #336d78;
        i {
          font-style: normal;
          &:nth-child(2) {
            margin-left: 10px;
            display: inline-block;
            width: 130px;
            text-align: center;
            height: 25px;
            line-height: 25px;
            border-radius: 6px;
            color: #fff;
            background-color: #336d78;
          }
        }
        margin-bottom: 5px;
      }
      .content {
        box-sizing: border-box;
        width: 100%;
        height: calc(100% - 30px);
        display: flex;
        flex-wrap: wrap;
        border-top: 1px solid #ccc;
        .item {
          border-bottom: 1px solid #ccc;
          width: calc(100% / 3);
          height: calc(100% / 4);
          box-sizing: border-box;
          padding: 10px;
          display: flex;
          &:nth-child(2),
          &:nth-child(5),
          &:nth-child(8),
          &:nth-child(11) {
            border-right: 1px solid #ccc;
            border-left: 1px solid #ccc;
          }
          .left {
            img {
              width: 70px;
              height: 70px;
            }
          }
          .right {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .title {
              margin: 0;
              i {
                &:nth-child(2) {
                  font-size: 14px;
                  height: 20px;
                  line-height: 20px;
                  width: 80px;
                  background-color: #75c5aa;
                }
              }
            }
            .fortune {
              font-size: 14px;
              opacity: 0.9;
              i {
                font-style: normal;
                color: #f16999;
                margin-left: 10px;
              }
            }
            .text {
              opacity: 0.8;
              font-size: 12px;
              padding-right: 3px;
              i {
                color: #f16999;
              }
            }
          }
        }
      }
    }
  }
}
</style>
