import request from './http.js'
const URL = process.env.VUE_APP_URL
export const getLocation = params => {
  return request({
    url: 'https://api.wetab.link/api/weather/location?',
    //   method: 'get',
    params
  })
}
export const getHotsearch = params => {
  return request({
    url: 'https://api.wetab.link/api/hotsearch/list',
    params
  })
}
export const getCity = params => {
  return request({
    url: `https://api.wetab.link/api/weather/city?location=${params}&lang=zh`
  })
}
//  天气 日
export const getWeatherDaily = params => {
  return request({
    url: `https://api.wetab.link/api/weather/daily?location=${params}&lang=zh`
  })
}
//  天气 时
export const getWeatherHourly = params => {
  return request({
    url: `https://api.wetab.link/api//weather/hourly?location=${params}&lang=zh`
  })
}
export const horoscopeGet = params => {
  return request({
    url: `${URL}/api/horoscope`,
    params
  })
}
