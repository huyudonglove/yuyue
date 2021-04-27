import wx from 'weixin-js-sdk'

let isMiniProgram = false
let isMustNoMiniProgram = false // 绝对不是小程序环境

if (window.WeixinJSBridge) {
  window.WeixinJSBridge.on('onPageStateChange', res => {
    isMiniProgram = true
  })
}

// 接受openToken
(() => {
  const reg = /&?openToken=(\w+)/i

  const getOpenToken = () => {
    const match = location.href.match(reg)
    if (match && match[1]) {
      console.log({ openToken: match[1] })
      window._openToken = match[1]
      sessionStorage.setItem('_openToken', window._openToken)

      setTimeout(() => {
        window.history.replaceState(
          null,
          null,
          window.location.href.replace(reg, '')
        )
      }, 0)
      window.removeEventListener('hashchange', getOpenToken)
    }
  }
  getOpenToken()

  window.addEventListener('hashchange', getOpenToken)
})()

/**
 * 同步判断是小程序环境
 */
const checkMiniProgramSync = () => {
  const ua = navigator.userAgent

  return (
    /miniProgram/i.test(ua) ||
    window.__wxjs_environment === 'miniprogram' ||
    isMiniProgram
  )
}

/**
 * 异步判断是小程序环境
 * @param {Function} callback 回调函数
 */
const checkMiniProgram = callback =>
  new Promise(resolve => {
    const returnResult = (val = false) => {
      if (callback) callback(val)
      if (val) {
        console.log('在微信小程序webview环境中。。。')
      }
      return resolve(val)
    }
    const timeout = setTimeout(() => {
      returnResult(false)
    }, 1000)

    const ua = navigator.userAgent
    // 不存在微信浏览器中，且isMustNoMiniProgram（绝对为小程序环境）为false
    if (/MicroMessenger/i.test(ua) && !isMustNoMiniProgram) {
      if (checkMiniProgramSync()) {
        clearTimeout(timeout)
        return returnResult(true)
      }

      wx.miniProgram.getEnv(res => {
        clearTimeout(timeout)
        isMiniProgram = !!res.miniprogram
        if (!isMiniProgram) {
          isMustNoMiniProgram = true
        }
        returnResult(!!res.miniprogram)
      })
    } else {
      clearTimeout(timeout)
      return returnResult(false)
    }
  })

const miniProgramCallhanlder = {
  navigateToByCmd (cmd, data = {}) {
    if (cmd) {
      console.log('action---navigateToByCmd')
      const query = typeof data === 'string' ? JSON.parse(data) : {}
      const url = `/pages/web/jump?cmd=${cmd}&params=${encodeURIComponent(JSON.stringify(query))}`
      console.log('navigateToByCmd', { url })
      wx.miniProgram.navigateTo({
        url,
        fail (err) {
          console.error('navigateToByCmd 跳转错误', err)
        },
        success () {
          console.log('navigateTo-success')
        },
        complete () {
          console.log('navigateTo-complete')
        }
      })
    }
  },
  goLogin () {
    wx.miniProgram.navigateTo({
      url: `/pages/login/index?redirect=${encodeURIComponent(
        window.location.href
      )}`
    })
  },
  getOpenToken (cb) {
    const _openToken = window._openToken || sessionStorage.getItem('_openToken')

    if (_openToken) {
      // 这个从进入到h5query里带出来
      cb && cb(_openToken)
    } else {
      // 去登录页面
      this.goLogin()
    }
  },
  checkLoginStatus (cb) {
    const _openToken = window._openToken || sessionStorage.getItem('_openToken')

    // eslint-disable-next-line standard/no-callback-literal
    if (cb) cb(_openToken ? 1 : 0)
  },
  postMessage (type, params = {}) {
    if (type) {
      wx.miniProgram.postMessage({
        data: { type, params }
      })
    }
  }
}

const miniProgramBridge = {
  callHandler: (name, data, cb) => {
    console.log('callHandler-', name, data)
    // h5调用小程序方法
    switch (name) {
      case 'GTBridge_Common_Base_cmd': {
        // cmd: string; params: string
        miniProgramCallhanlder.navigateToByCmd(data.cmd, data.params)
        break
      }
      case 'Caller_Common_Base_sendOpenToken': {
        miniProgramCallhanlder.getOpenToken(cb)
        break
      }
      case 'GTBridge_Common_Base_getOpenToken': {
        miniProgramCallhanlder.getOpenToken(cb)
        break
      }
      case 'GTBridge_Common_Base_getLoginStatus': {
        miniProgramCallhanlder.checkLoginStatus(cb)
        break
      }

      case 'GTBridge_Common_Base_goLogin': {
        // 去登录
        miniProgramCallhanlder.goLogin()
        break
      }
      case 'GTBridge_Common_Base_getShareInfo': {
        // 分享
        // {"shareTitle":"欢迎来到utopa","subTitle":"集娱乐，购物，美食和家居一体的多维购物空间！无限可能","shareIcon":"https://image-devtest.myutopa.com/FjSexCwZYEs3y1V0YRznBHji_lty?e=1621233052&token=WNtUYaMiCdpTDzanlE03SjKXLinbmTzkLGXEBYC_:LT9A3mRYvyDrsZeM8wPtanlM2gI=","shareUrl":"https://www-test.myutopa.com/m/campaign/#/activity/activityHome?activityId=75&pageId=101&crm_channel_id=110"}
        miniProgramCallhanlder.postMessage('share', data)
        break
      }
      default: {
        console.warn('JsBridge匹配不到')
      }
    }
  },
  registerHandler: (name, cb) => {
    // 注册小程序方法
  }
}

export default {
  checkMiniProgramSync,
  checkMiniProgram,
  miniProgramBridge
}
