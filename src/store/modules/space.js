import {
  getLocation,
  getHotsearch,
  getCity,
  getWeatherDaily,
  getWeatherHourly
} from '@/api/space'

const state = {
  Location: {},
  Hotsearch: {},
  City: {},
  CitySearch: {},
  WeatherDaily: {},
  WeatherHourly: {}
}
const mutations = {
  setLocation (state, data) {
    state.Location = data
  },
  setHotsearch (state, data) {
    state.Hotsearch = data
  },
  setCity (state, data) {
    state.City = data
  },
  setCitySearch (state, data) {
    state.CitySearch = data
  },
  setWeatherDaily (state, data) {
    state.WeatherDaily = data
  },
  setWeatherHourly (state, data) {
    state.WeatherHourly = data
  }
}
const actions = {
  async GetLocation (store) {
    const res = await getLocation()
    const resC = await getCity(res.data.data)
    store.commit('setCity', resC.data)
    store.commit('setLocation', res.data)
  },
  async GetCity (store, data) {
    const resC = await getCity(data)
    store.commit('setCitySearch', resC.data)
  },
  async GetHotsearch (store, data) {
    const res = await getHotsearch(data)
    store.commit('setHotsearch', res.data)
  },
  async GetWeatherDaily (store, data = store.state.City.data.list[0].id) {
    const res = await getWeatherDaily(data)
    store.commit('setWeatherDaily', res.data)
  },
  async GetWeatherHourly (store, data = store.state.City.data.list[0].id) {
    const res = await getWeatherHourly(data)
    store.commit('setWeatherHourly', res.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
