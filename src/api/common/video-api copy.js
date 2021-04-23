import { __REQ_UTIL__ } from '@/api/eshopHelper'
import SysConfig from '@/api/primeval/common/baseApi'
const REQ_TYPE_COOP = 'COOP'
const REQUEST_TYPE_APP_NAME = 'APP'

// 获取用户id
export function getUid(params) {
  return commonRequest('account.accessToken.get', params)
}

// 获取用户 信息
export function getUserData(params) {
  return appRequest('account.userdata.getUserData', params)
}
// 获取sessionKey和seession密钥【在这个页面生成的，别的页面就不用再生成sk了】
export function checkAndGenerateSession() {
  return new Promise((resolve, reject) => {
    return __REQ_UTIL__.generateSession(
      {
        url: SysConfig.BASE_API,
      },
      (result) => {
        resolve(result)
      },
      (result) => {
        reject(result)
      },
    )
  })
}
// 类型为 COOP
function commonRequest(method, params) {
  return new Promise(async (resolve, reject) => {
    let config = {
      settings: {
        type: REQ_TYPE_COOP,
        withAccessToken: false,
      },
      url: SysConfig.BASE_API_URL,
      method: method,
      args: params,
    }
    return __REQ_UTIL__.request(
      config,
      (data) => {
        resolve(data)
      },
      (data) => {
        console.log('请求报错====>', data)
      },
    )
  })
}
// 类型为 APP
function appRequest(method, params) {
  return new Promise(async (resolve, reject) => {
    // let res = await checkAndGenerateSession()
    // console.log('sessionKey==', res)
    // localStorage.setItem('sessionKey', res.sessionKey)
    // localStorage.setItem('sessionSecret', res.sessionSecret)
    let config = {
      settings: {
        type: REQUEST_TYPE_APP_NAME,
        withAccessToken: true,
      },
      // sessionKey: res.sessionKey,
      // sessionSecret: res.sessionSecret,
      url: SysConfig.BASE_API,
      method: method,
      args: params,
    }
    return __REQ_UTIL__.request(
      config,
      (data) => {
        resolve(data)
      },
      (data) => {
        console.log('请求报错====>', data)
      },
    )
  })
}
