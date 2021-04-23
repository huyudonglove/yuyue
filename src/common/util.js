import {
  Toast
} from 'mint-ui'

// 轻提示
export function showToast (message) {
  let opt
  const duration = 1500 // 默认展示时
  if (typeof message === 'string') {
    opt = {
      message,
      duration
    }
    Toast(opt)
    return
  }
  if (typeof message === 'object') {
    opt = Object.assign({
      duration
    }, message)
    Toast(opt)
  }
}

export function getBaseUrl () {
  var hostname = window.location.hostname
  if (hostname.indexOf('www-dev') > -1) {
    return 'https://www-dev.myutopa.com'
  } else if (hostname.indexOf('www-test') > -1) {
    return 'https://www-test.myutopa.com'
  } else if (hostname.indexOf('www-pre') > -1) {
    return 'https://www-pre.myutopa.com'
  } else if (hostname.indexOf('localhost') > -1) {
    return 'https://www-test.myutopa.com'
  }
  return 'https://www.myutopa.com'
}
