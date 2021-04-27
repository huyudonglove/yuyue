/**
 * Created by skz on 2018/5/14 15:57
 */
/* eslint-disable */
import Bridge from '../bridge'

/**
 * [JSBridge调用APP接口] 点击购买按钮
 * @param {object} data        // 参数
 * @param {function} callback  // 回调函数
 * @constructor
 */
const Reg_GTBridge_Ice_Common_Pay = (callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.registerHandler('GTBridge_Ice_Common_Pay', callback)
  })
}


export default {
  Reg_GTBridge_Ice_Common_Pay
}
