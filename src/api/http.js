import axios from 'axios'
const _axios = axios.create({
  // baseURL: '/api/'
  // baseURL: 'https://api.wetab.link/api/'
})
_axios.defaults.timeout = 60000
_axios.interceptors.request.use(
  config => {
    console.log(config, 'config')
    if (config.url.includes('api.wetab')) {
      config.headers['i-version'] = '1.0.37'
      config.headers['i-branch'] = 'zh'
      config.headers['i-app'] = 'hitab'
      config.headers['i-branch'] = 'zh'
      // config.headers.Host = 'api.wetab.link'
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
_axios.interceptors.response.use(
  res => {
    return res
  },
  error => {
    return Promise.reject(error)
  }
)
export default _axios
