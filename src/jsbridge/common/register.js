/**
 * Created by skz on 2018/5/14 15:57
 */
/* eslint-disable */
import Bridge from '../bridge'

const Reg_GTBridge_Common_Base_getOpenToken = (callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.registerHandler('GTBridge_Common_Base_getOpenToken2', callback)
  })
}




export default {
  Reg_GTBridge_Common_Base_getOpenToken
}
