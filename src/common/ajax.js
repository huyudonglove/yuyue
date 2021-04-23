/**
 * Created by skz on 2017/10/10 18:13
 */
/**
 * AJax 请求
 * 封装签名
 * Methods:
 *   1. request
 *   2. get
 *   3. post
 * params: 方法请求参数与 axios 请求参数基本相同，比 axios 多了一个 reqMethod 字段
 *   req = {
 *    url: '',
 *    method: 'get',
 *    params: {},
 *    reqMethod: 'account.session.gen'      // 请求方法
 *   }
 * 使用:
 * request(req)
 * get({params: {}, reqMethod: ''})
 * post({params: {}, reqMethod: ''})
 */

import { Helper } from './helper'
import {
  getAuthorityInfo,
  setAuthorityInfo,
  removeAuthorityInfo,
  getToken,
  removeToken,
  removeUserData
} from './auth'
import * as Const from './constants'
import fetch from './fetch'
import md5 from 'blueimp-md5'

/* eslint-disable no-useless-call */
function getAuthInfo () {
  return getAuthorityInfo() && JSON.parse(getAuthorityInfo())
}

function setAuthoInfo (authInfo) {
  setAuthorityInfo(JSON.stringify(authInfo))
}
// 获取会话
function getSession () {
  console.log(111,22)
  let authInfo = getAuthInfo()
  if (!authInfo) {
    return fetch({
      method: 'get',
      params: {
        method: Const.SESSION_REQUEST
      }
    }).then((response) => {
      let result = response
      if (result && result.code === 0) {
        authInfo = result.data
        authInfo.difference = authInfo.timestamp - Math.floor(Date.now() / 1000)
        setAuthoInfo(authInfo)
      }
    })
  }
  return authInfo
}

// 获取签名
function getSign (
  method,
  params,
  interfaceVer = Const.INTERFACE_VERSION,
  newInterfaceVer = Const.INTERFACE_NEWVERSION
) {
  // 有几个接口需要verson为2.0
  let paramsStr = JSON.stringify(Helper.deepSort(params))
  paramsStr = paramsStr.replace(/(\/)/g, '\\$1')
  // let authInfo = getAuthInfo()
  let authInfo = getSession()

  // console.log(authInfo,'authInfoauthInfoauthInfoauthInfoauthInfo');

  const timestamp = Math.floor(Date.now() / 1000) + authInfo['difference']
  authInfo['timestamp'] = timestamp
  setAuthoInfo(authInfo)
  const sessionKey = authInfo['sessionKey']
  const sessionSecret = authInfo['sessionSecret']
  let mix = ''
  let ver
  if (Const.NEWVERSION_METHODS.includes(method)) {
    ver = newInterfaceVer
  } else {
    ver = interfaceVer
  }
  mix =
    'method=' +
    method +
    '&params=' +
    paramsStr +
    '&sessionKey=' +
    sessionKey +
    '&timestamp=' +
    timestamp +
    '&ver=' +
    ver +
    sessionSecret
  // console.log(mix,'mixmixmixmixmixmixmixmixmixmix');

  return md5(mix)
}

// 获取请求参数
function getReqParams (
  method,
  params,
  interfaceVer = Const.INTERFACE_VERSION,
  newInterfaceVer = Const.INTERFACE_NEWVERSION
) {
  const sign = getSign(method, params)
  const authInfo = getAuthInfo()
  // 有几个接口需要verson为2.0
  let ver
  if (Const.NEWVERSION_METHODS.includes(method)) {
    ver = newInterfaceVer
  } else {
    ver = interfaceVer
  }
  return {
    method,
    ver,
    timestamp: authInfo['timestamp'],
    sessionKey: authInfo['sessionKey'],
    sign,
    params: JSON.stringify(params)
  }
}

// ajax 请求
async function request (req) {
  // const args = _.cloneDeep([].slice.call(arguments)) // 缓存参数， 避免续约之后再次请求参数格式错乱
  // const args = [].slice.call(arguments)
  let authInfo = getAuthInfo()
  // let accessToken = getToken()
  if (!authInfo) {
    await getSession()
  }
  const reqParams = req.params
  const reqMethod = req.reqMethod
  let requestParams = Object.assign(
    {
      accessToken: getToken()
    },
    reqParams || {}
  )
  req['params'] = getReqParams(reqMethod, requestParams)
  // console.log(111,req);
  return new Promise((resolve, reject) => {
    fetch(req)
      .then((response) => {
        // console.log(222,response);
        const result = response
        const statusCode = result.code
        if (
          [
            Const.INVALID_SESSION,
            Const.INVALID_SIGN,
            Const.SESSION_RENEW,
            Const.SESSION_EXPIRE
          ].includes(statusCode)
        ) {
          removeAuthorityInfo()
          removeToken()
          removeUserData()
          location.reload()
        } else if (
          [Const.NOT_LOGIN_USER, Const.TOKEN_EXPIRE, Const.TOKEN_RENEW].includes(statusCode)
        ) {
          // 未登录及令牌过期情况 跳转登录
          removeToken()
          removeUserData()
          removeAuthorityInfo()

          // router.push({
          //   path: '/login'
          // })
        }
        // if (Const.INVALID_SESSION === statusCode || Const.INVALID_SIGN === statusCode || Const.SESSION_RENEW === statusCode) {
        //   removeAuthorityInfo()
        //   // getSession().then(() => {
        //   //   request.apply(null, args).then(data => {
        //   //     resolve(data)
        //   //   })
        //   // })
        //   return
        // }
        // if (Const.NOT_LOGIN_USER === statusCode || Const.TOKEN_EXPIRE === statusCode || Const.TOKEN_RENEW === statusCode) { // 未登录及令牌过期情况，根据openToken获取
        //   login().then(() => {
        //     return request.apply(null, args).then(data => {
        //       resolve(data)
        //     })
        //   })
        //   return
        // }
        resolve(response)
      })
      .catch((response) => {
        // error('操作失败')
        console.log('服务出错\n\t error path: \n', location.href, response)
        reject(response)
      })
  })
}

// get 请求
function get (req) {
  return request(
    Object.assign(req, {
      method: 'get'
    })
  )
}

// post 请求
function post (req) {
  return request(
    Object.assign(req, {
      method: 'post'
    })
  )
}

export default {
  get,
  // fetch: get,
  post,
  request,
  getSign,
  getSession
}
