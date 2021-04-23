import Vue from 'vue'
import axios from 'axios'
import SysConfig from './baseApi'
// 创建axios实例
const service = axios.create({
  baseURL: SysConfig.BASE_API, // api的base_url
  timeout: 12000 // 请求超时时间
})
Vue.prototype.$http = service
// request请求拦截器
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// respone返回拦截器
service.interceptors.response.use(
  ({ data }) => {
    if (data.code === 99950005) {
      // 用户未登录
      // Indicator.close()
      // console.log(
      //   window.VueInstance.$route.name,
      //   'window.VueInstance.$route.name'
      // )
      // let currentRouterName = window.VueInstance.$route.name
      // let query = window.VueInstance.$route.query
      // query['redirect'] = currentRouterName
      // if (currentRouterName !== 'shopDetail') {
      //   Router.push({
      //     path: '/login',
      //     query: query
      //   })
      // }
    }
    return data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
