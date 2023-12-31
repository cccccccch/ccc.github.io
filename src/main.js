import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import directives from '@/utils/directive'
Object.keys(directives).forEach((i) => {
  Vue.directive(i, directives[i])
})
Vue.prototype.$bus = new Vue()

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
