/**
 * Created by skz on 2018/5/9 16:56
 */

/**
 * Created by skz on 2018/1/25 15:40
 */
/* eslint-disable no-unused-vars */

const browsers = {
  versions: (() => {
    const u = navigator.userAgent;
    const app = navigator.appVersion;
    return {
      // 移动终端浏览器版本信息
      trident: u.indexOf('Trident') > -1, // IE内核
      presto: u.indexOf('Presto') > -1, // opera内核
      webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // 火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或uc浏览器
      iPhone: u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, // 是否iPad
      webApp: u.indexOf('Safari') === -1, // 是否web应该程序，没有头部与底部
      utopaApp: u.indexOf('utopaApp') > -1, // 是否优托邦app内打开的
    };
  })(),
  language: (navigator.browserLanguage || navigator.language).toLowerCase(),
};

function isMobileBrowser() {
  return browsers.versions.mobile;
}
function isIOS() {
  return browsers.versions.ios;
}
function isAndroid() {
  return browsers.versions.android;
}
function isWeiChatBrowser() {
  const ua = navigator.userAgent.toLowerCase();
  const matcher = ua.match(/MicroMessenger/i);
  return isMobileBrowser() && matcher && matcher[0] === 'micromessenger';
}

function isAlipayBrowser() {
  const ua = navigator.userAgent.toLowerCase();
  const matcher = ua.match(/Alipay/i);
  return isMobileBrowser() && matcher && matcher[0] === 'alipay';
}

function isWeiBoBrowser() {
  const ua = navigator.userAgent.toLowerCase();
  const matcher = ua.match(/WeiBo/i);
  return isMobileBrowser() && matcher && matcher[0] === 'weibo';
}

function isQQBrowser() {
  const ua = navigator.userAgent.toLowerCase();
  const matcher = ua.match(/QQ/i);
  return isMobileBrowser() && matcher && matcher[0] === 'qq';
}
function isUtopaApp() {
  const ua = navigator.userAgent.toLowerCase();
  const matcher = ua.match(/utopaApp/i);
  return isMobileBrowser() && ((matcher && matcher[0] === 'utopaapp') || !!window._isUtopaApp);
}

export default {
  isWeiChatBrowser,
  isAlipayBrowser,
  isWeiBoBrowser,
  isQQBrowser,
  isUtopaApp,
  isIOS,
  isAndroid,
};
