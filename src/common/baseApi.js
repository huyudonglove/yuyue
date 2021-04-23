/*
 * @Author: eamiear
 * @Date: 2018-12-19 14:57:57
 * @Last Modified by: Fourleaf
 * @Last Modified time: 2020-06-10 15:36:36
 */
import config from './config'

var generateApiServer = () => {
  var hostname = window.location.hostname
  console.log(hostname,'hostname')
  var domain = {
    prod: 'api',
    dev: 'api-dev',
    test: 'api-test',
    pre: 'api-pre'
  }
  var env = 'prod'

  if (hostname.indexOf('dev') > -1) {
    env = 'dev'
  } else if (hostname.indexOf('test') > -1) {
    env = 'test'
  } else if (hostname.indexOf('pre') > -1) {
    env = 'pre'
  }
  // console.log(`https://+${domain[env]}+.myutopa.com/app.do`, '请求地址验证处理')
  let url = 'https://' + domain[env] + '.myutopa.com/app.do'
  if (process.env.VUE_APP_BUILD_ENV === 'dev' || process.env.VUE_APP_BUILD_ENV === 'test') {
    url = config.dev.baseApi
  }
  return url
}

var getApi = () => {
  var hostname = window.location.hostname
  var domain = {
    prod: 'api',
    dev: 'api-dev',
    test: 'api-test',
    pre: 'api-pre'
  }
  var env = 'prod'

  if (hostname.indexOf('dev') > -1) {
    env = 'dev'
  } else if (hostname.indexOf('test') > -1) {
    env = 'test'
  } else if (hostname.indexOf('pre') > -1) {
    env = 'pre'
  }
  // console.log(`https://+${domain[env]}+.myutopa.com/api.do`, '请求地址验证处理')
  let url = 'https://' + domain[env] + '.myutopa.com/api.do'
  if (process.env.VUE_APP_BUILD_ENV === 'dev' || process.env.VUE_APP_BUILD_ENV === 'test') {
    url = config.dev.baseCooperationApi
  }
  console.log('url',url);
  
  return url
}
// window.Utopa = {
//   SysConfig: {
//     BASE_API: generateApiServer(),
//     BASE_API_URL: getApi(),
//   },
// }
export default {
  BASE_API: generateApiServer(),
  BASE_API_URL: getApi()
}
