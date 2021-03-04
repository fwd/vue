import Vue from 'vue'

import router from './router'
import store from './store'
import http from './http'
import App from './App.vue'

// import assets styles
require('@/assets/scss/style.scss')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
