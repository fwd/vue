import vue from 'vue'

// axios
import axios from 'axios'

const http = axios.create({
  // You can add your headers here
  // ================================
  // baseURL: 'https://some-domain.com/api/',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
})

vue.prototype.$http = http

export default http
