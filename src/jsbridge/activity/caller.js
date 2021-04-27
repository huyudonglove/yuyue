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
const Caller_XQ_TimeCard_PurchaseBtnClick = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_XQ_TimeCard_PurchaseBtnClick', data, callback)
  })
}

export default {
  Caller_XQ_TimeCard_PurchaseBtnClick
}
