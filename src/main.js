import Vue from 'vue'

import router from './router'
import http from './http'
import app from './app.vue'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(app),
}).$mount('#app')
