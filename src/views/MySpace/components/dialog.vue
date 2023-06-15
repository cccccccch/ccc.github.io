<template>
  <div class="SpaceDialog" v-show="diaLogShow">
     <meta name="referrer" content="no-referrer" />
    <div class="msk"></div>
    <div class="SpaceDialog-box">
      <div class="SpaceDialog-box-title">
        <p class="slot"><slot name="title">日期展位</slot></p>
        <div
          class="SpaceDialog-box-title-button"
          @click="$emit('update:diaLogShow', false)"
        >
          x
        </div>
      </div>
      <div
        class="SpaceDialog-main"
        :class="bgc == 1 ? 'shine' : bgc == 2 ? 'rain' : 'cloudy'"
      >
        <div class="SpaceDialog-main-city">
          <div class="left">
            {{ WeatherHourly.data ? WeatherHourly.data.hourly[0].temp : '--' }}°
          </div>
          <div class="center">
            <div class="center-top">
              <p>
                {{
                  WeatherHourly.data ? WeatherHourly.data.hourly[0].text : '--'
                }}
                {{
                  WeatherDaily.data ? WeatherDaily.data.daily[0].tempMax : '--'
                }}° ~
                {{
                  WeatherDaily.data ? WeatherDaily.data.daily[0].tempMin : '--'
                }}°
              </p>
              <img
                src="https://static.wetab.link/weather-icon/101.png"
                alt=""
              />
            </div>
            <div class="center-bottom">
              <p>
                {{
                  WeatherDaily.data
                    ? WeatherDaily.data.daily[0].windDirDay
                    : '--'
                }}:
                {{
                  WeatherDaily.data
                    ? WeatherDaily.data.daily[0].windScaleDay
                    : '--'
                }}级
              </p>
              <p>
                风速:
                {{
                  WeatherHourly.data
                    ? WeatherHourly.data.hourly[0].windSpeed
                    : '--'
                }}km/h
              </p>
              <p>
                相对湿度:
                {{
                  WeatherHourly.data
                    ? WeatherHourly.data.hourly[0].humidity
                    : '--'
                }}%
              </p>
              <p>
                大气压强:
                {{
                  WeatherHourly.data
                    ? WeatherHourly.data.hourly[0].pressure
                    : '--'
                }}hpa
              </p>
            </div>
          </div>
          <div class="right">
            {{
              CitySearch.data
                ? CitySearch.data.list[0].name
                : City.data.list[0].name || '--'
            }}
            <el-button
              id="BoxButton"
              @click="showSearch = true"
              icon="el-icon-sort"
            ></el-button>
          </div>
        </div>
        <div class="WeatherHourly">
          <div class="WeatherHourly-title">24小时预报</div>
          <div class="item">
            <template
              v-for="(item, index) in WeatherHourly.data
                ? WeatherHourly.data.hourly
                : []"
            >
              <div v-if="index < 13" :key="item.fxTime">
                <div class="img">
                  <img
                    :src="`https://static.wetab.link/weather-icon/${item.icon}.png`"
                    alt=""
                  />
                </div>
                <div class="Num">{{ item.temp }}°</div>
                <div class="time">{{ item.fxTime | date }}</div>
              </div>
            </template>
          </div>
        </div>
        <div class="WeatherDaily WeatherHourly">
          <div class="WeatherHourly-title" style="margin-top: 0">
            未来7天预报
          </div>
          <div class="item">
            <template
              v-for="(item, index) in WeatherDaily.data
                ? WeatherDaily.data.daily
                : []"
            >
              <div v-if="index < 8" :key="item.fxDate">
                <div class="img">
                  <img
                    :src="`https://static.wetab.link/weather-icon/${item.iconDay}.png`"
                    alt=""
                  />
                </div>
                <div class="Num">{{ item.tempMax }}° ~ {{ item.tempMin }}°</div>
                <div class="time">
                  {{ item.fxDate | datethree }} {{ item.fxDate | dateTwo }}
                </div>
              </div>
            </template>
          </div>
        </div>
        <div class="itemSearch" v-if="showSearch">
          <div class="msk"></div>
          <div class="main" v-ClickOut="OFFSearch">
            <el-input
              @change="searchFn"
              v-model="input"
              placeholder="搜素"
              prefix-icon="el-icon-search"
            >
            </el-input>
            <div class="box" v-if="CitySearch.code == 0">
              <template
                v-for="(item, index) in CitySearch.data
                  ? CitySearch.data.list
                  : []"
              >
                <div v-if="index < 9" class="item" :key="item.id">
                  <p @click="searchClick(item)">{{ item.name }}</p>
                </div>
              </template>
            </div>
            <el-empty v-else description="未知结果"></el-empty>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { mapState, mapActions } from 'vuex'
export default {
  props: {
    bgc: {
      type: Number,
      require: true,
      default: 1
    },
    diaLogShow: {
      type: Boolean,
      require: true
    }
  },
  name: 'SpaceDialog',
  data () {
    return {
      showSearch: false,
      //   diaLogShow: false,
      input: window.localStorage.getItem('input') || ''
    }
  },
  computed: {
    ...mapState('space', [
      'WeatherDaily',
      'WeatherHourly',
      'City',
      'CitySearch'
    ])
  },
  filters: {
    date (res) {
      return moment(res).format('kk:mm')
    },
    dateTwo (res) {
      moment.locale('zh-cn')
      return moment(res).format('周dd')
    },
    datethree (res) {
      //   moment.locale('zh-cn')
      return moment(res).format('M月DD日')
    }
  },
  watch: {
    input (val) {
      this.searchFn()
    }
  },
  methods: {
    ...mapActions('space', ['GetCity', 'GetWeatherDaily', 'GetWeatherHourly']),
    searchFn () {
      window.localStorage.setItem('input', this.input)
      const times = setTimeout(() => {
        clearTimeout(times)
        this.GetCity(this.input)
      }, 500)
    },
    searchClick (data) {
      this.GetWeatherHourly(data.id)
      this.GetWeatherDaily(data.id)
      this.input = data.name
      window.localStorage.setItem('input', this.input)
      window.localStorage.removeItem('input')
      this.CitySearch.data.list = this.CitySearch.data.list.filter(
        v => data.id === v.id
      )
      console.log(this.CitySearch)
      this.showSearch = false
    },
    OFFSearch () {
      this.showSearch = false
    }
  }
}
</script>

<style scoped lang="scss">
.SpaceDialog {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .msk {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0.25;
    width: 100%;
    height: 100%;
    z-index: 25;
  }
  &-box {
    box-sizing: border-box;
    position: absolute;
    top: 10%;
    left: calc(50% - 500px);
    width: 1000px;
    height: 500px;
    background: linear-gradient(1turn, #e1e3ed00, #c7cedb);
    z-index: 9999;
    border-radius: 30px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    &-title {
      padding: 10px;
      padding-bottom: 5px;
      padding-right: 20px;
      display: flex;
      justify-content: end;
      text-align: center;
      height: 30px;
      &-button {
        width: 20px;
        height: 20px;
        line-height: 18px;
        text-align: center;
        font-size: 12px;
        border-radius: 50%;
        color: #ff7330;
        font-weight: 700;
        background-color: #ff7330;
        transition: transform 1000ms;
        &:hover {
          color: #fff;
        }
      }
      .slot {
        flex: 1;
        text-align: center;
        filter: opacity(0.45);
      }
    }
    .SpaceDialog-main {
      box-sizing: border-box;
      padding: 20px;
      height: 470px;
      width: 1000px;
      // background: linear-gradient(1turn,#282b30,#c7cedb);
      &-city {
        display: flex;
        align-items: center;
        .left {
          width: 150px;
          font-size: 45px;
          font-weight: 700;
          text-align: center;
        }
        .center {
          flex: 1;
          height: 50px;
          div {
            height: 50%;
            line-height: 25px;
          }
          &-top {
            font-size: 14px;
            display: flex;
            align-items: center;
            filter: opacity(0.9);
            img {
              margin-left: 20px;
              width: 20px;
              height: 20px;
            }
          }
          &-bottom {
            font-size: 12px;
            filter: opacity(0.5);
            display: flex;
            align-items: center;
            p {
              margin-right: 18px;
            }
          }
        }
        .right {
          width: 150px;
          .el-button {
            box-sizing: border-box;
            transform: rotateZ(90deg);
            width: 20px;
            height: 20px;
            padding: 0;
            margin-left: 10px;
          }
        }
      }
      .WeatherHourly {
        box-sizing: border-box;
        padding: 0px 20px 50px 40px;
        &-title {
          font-size: 14px;
          margin: 50px 0 30px;
          filter: opacity(0.8);
        }
        .item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .Num {
            margin: 12px 0 3px;
          }
          div {
            text-align: center;
          }
          font-size: 13px;
          filter: opacity(0.6);
          .img {
            img {
              width: 20px;
              height: 20px;
            }
          }
        }
      }
    }
    .cloudy {
      //  阴天
      background: linear-gradient(0, #636466, #ddd 60%, #c7cedb);
    }
    .rain {
      // 暴雨
      background: linear-gradient(0, #2b2b2b, #4e4e4e 30%, #6e6d6d 60%, #ccc);
    }
    .shine {
      //   晴天
      background: linear-gradient(180deg, #c7cedb, #ebd5ad);
    }
    .itemSearch {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      .msk {
        position: absolute;
        top: 0;
        left: 0;
        background-color: #f8f8f8;
        opacity: 0.9;
        z-index: 12;
      }
      .main {
        position: absolute;
        top: 60px;
        left: calc(50% - 125px);
        width: 250px;
        color: #fff;
        z-index: 99999;
        color: #000;
        opacity: 0.8;
        .box {
          margin-top: 20px;
          p {
            margin-bottom: 20px;
            display: block;
            height: 30px;
            line-height: 30px;
            padding-left: 5px;
            border-radius: 8px;
            &:hover {
              background-color: #fff;
            }
          }
        }
        .el-input {
          width: 250px;
          ::v-deep .el-input__inner {
            border-radius: 18px;
          }
        }
      }
    }
  }
}
</style>
