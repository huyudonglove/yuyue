/**
 * Created by skz on 2018/5/14 15:57
 */
/* eslint-disable */
import Bridge from '../bridge';

const Reg_GTBridge_Common_Base_getOpenToken = (callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.registerHandler('GTBridge_Common_Base_getOpenToken2', callback);
  });
};
const Reg_GTBridge_Common_Base_sendOpenToken = (callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.registerHandler('GTBridge_Common_Base_sendOpenToken', callback);
  });
};
// 分享返回
const GTBridge_Common_Base_sendShareResult = (callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.registerHandler('GTBridge_Common_Base_sendShareResult', callback);
  });
};
// 页面显示状态变化通知，
// 0 页面变为不显示，1 页面变为显示
const GTBridge_Common_Base_SendPageShowState = (callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.registerHandler('GTBridge_Common_Base_SendPageShowState', callback);
  });
};

export default {
  Reg_GTBridge_Common_Base_sendOpenToken,
  Reg_GTBridge_Common_Base_getOpenToken,
  GTBridge_Common_Base_sendShareResult,
  GTBridge_Common_Base_SendPageShowState,
};
