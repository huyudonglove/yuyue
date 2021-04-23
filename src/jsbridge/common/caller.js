/**
 * Created by skz on 2018/5/14 15:57
 */
/* eslint-disable */
import Bridge from '../bridge';
/**
 * [JSBridge调用APP接口] 获取OpenToken
 * @param {object} data        // 参数
 * @param {function} callback  // 回调函数
 * @constructor
 */
const Caller_Common_Base_getOpenToken = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Common_Base_getOpenToken', data, callback);
  });
};

/**
 * [JSBridge调用APP接口] 唤起APP
 * @param data
 * @param callback
 * @constructor
 */
const Caller_Common_Base_evokeApp = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Common_Base_evokeApp', data, callback);
  });
};

// 首页点击商品，跳转商品详情
const GTBridge_Utopa_Mall_newShowGoodsDetail = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Utopa_Mall_newShowGoodsDetail', data, callback);
  });
};

// 首页点击商品，跳转商品详情
const GTBridge_Utopa_Mall_showGoodsDetail = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Utopa_Mall_showGoodsDetail', data, callback);
  });
};

const GTBridge_Common_Base_cmd = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Common_Base_cmd', data, callback);
  });
};
//判断时候在APP内打开  是的话会返回1，不是返回空
const GTBridge_Common_Base_isOpenInApp = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Common_Base_isOpenInApp', data, callback);
  });
};
// 获取tocken
const Caller_Common_Base_sendOpenToken = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Common_Base_sendOpenToken', data, callback);
  });
};
// 判断是否登录(仅判断,1登录0未登录)
const Caller_Common_Base_getLoginStatus = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Common_Base_getLoginStatus', data, callback);
  });
};
// 注销账户
const GTBridge_Common_Base_logout = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Common_Base_logout', data, callback);
  });
};

const GTBridge_Common_Base_getShareInfo = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Common_Base_getShareInfo', data, callback);
  });
};
//返回
const GTBridge_Common_Base_back = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Common_Base_back', data, callback);
  });
};
//分享
const GTBridge_Common_Base_showShare = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Common_Base_showShare', data, callback);
  });
};

//改变页面状态栏图标颜色
// {"color" : 1 or 2} ，1 白色 2 黑色
const GTBridge_Common_Base_ChangeStatusColor = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Common_Base_ChangeStatusColor', data, callback);
  });
};

export default {
  GTBridge_Common_Base_showShare,
  GTBridge_Common_Base_back,
  Caller_Common_Base_getOpenToken,
  Caller_Common_Base_evokeApp,
  GTBridge_Utopa_Mall_newShowGoodsDetail,
  GTBridge_Utopa_Mall_showGoodsDetail,
  GTBridge_Common_Base_cmd,
  GTBridge_Common_Base_isOpenInApp,
  Caller_Common_Base_sendOpenToken,
  Caller_Common_Base_getLoginStatus,
  GTBridge_Common_Base_logout,
  GTBridge_Common_Base_getShareInfo,
  GTBridge_Common_Base_ChangeStatusColor
};
