import axios from 'axios'
import _this from '../main.js'

axios.defaults.baseURL = 'http://vpn.zhaohu.co:36009'

axios.defaults.withCredentials = true

//相应拦截器
axios.interceptors.response.use(
  function(response) {
    if (
      response.data.message == '登录令牌无效' &&
      response.data.errcode == 4802
    ) {
      _this.$router.push('/login')
      // console.log(_this.$router)
    }
    return response
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default axios
