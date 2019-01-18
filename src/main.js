import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
// import axios from 'axios'
// import '../static/css/element-ui.css'
// import '../static/css/element-variables.scss'
import '../src/assets/css/element-ui.css'
import '../src/assets/css/element-variables.scss'
import '@/assets/css/reset.css'
import '@/assets/iconfont/iconfont.css'

//二次封装axios
import cAxios from './fun/cAxios'
Vue.prototype.axios = cAxios

Vue.use(ElementUI)

Vue.config.productionTip = false

// Vue.prototype.axios = axios
// axios.defaults.baseURL = 'http://192.168.1.153:6009'

// axios.defaults.withCredentials = true

//相应拦截器
// axios.interceptors.response.use(
//   function(response) {
//     if (
//       response.data.message == '登录令牌无效' &&
//       response.data.errcode == 4802
//     ) {
//       location.hash = 'login'
//     }
//     return response
//   },
//   function(error) {
//     // 对响应错误做点什么
//     return Promise.reject(error)
//   }
// )

let myApp = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
export default myApp
