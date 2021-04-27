/**
 * Created by skz on 2018/5/14 15:57
 */
/* eslint-disable */
import Bridge from '../bridge'

/**
 * [JSBridge调用支付接口] 点击购买按钮
 * @param {object} data   {payOrderNo}     // 参数
 * @param {function} callback  // 回调函数
 * @constructor
 */
const Caller_GTBridge_Ice_Common_Pay = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Ice_Common_Pay', data, callback)
  })
}

/**
 * h5售中/售后状态改变时请求app，以便app刷新数据
 */
const GTBridge_Utopasj_Order_orderStatusChange = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Utopasj_Order_orderStatusChange', data, callback)
  })
}

/**
 * 存储选中的商品类目
 */
const GTBridge_Utopasj_Goods_getCategory = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Utopasj_Goods_getCategory', data, callback)
  })
}

/**
 * 跳转到添加退货地址
 */
const GTBridge_Utopasj_Afterdetail_openNewAddress = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Utopasj_Afterdetail_openNewAddress', data, callback)
  })
}

/**
 * 退货地址跳转回售后详情返回标记以便判断是否显示弹框
 */
const GTBridge_Utopasj_Afterdetail_onSaveAddressSuccess = (callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.registerHandler('GTBridge_Utopasj_Afterdetail_onSaveAddressSuccess', callback)
  })
}


export default {
  Caller_GTBridge_Ice_Common_Pay,
  GTBridge_Utopasj_Order_orderStatusChange,
  GTBridge_Utopasj_Goods_getCategory,
  GTBridge_Utopasj_Afterdetail_openNewAddress,
  GTBridge_Utopasj_Afterdetail_onSaveAddressSuccess
}
