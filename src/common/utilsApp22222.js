/* eslint-disable */
import CallApp from 'callapp-lib';
import ua from './ua';
import JSBridge from '@/jsbridge'
console.log(JSBridge,33)
/**
 * 从H5打开ar app
 *
 */
/**
 * 从H5打开ar app
 *
 */
export function openArApp(config = {}) {
    const {
      appId = "",
      token = "",
      userId = "",
      sessionKey = "",
      sessionSecret = ""
    } = config;
    let options = {
      scheme: { protocol: "utopaar" },
      // intent: {
      //   package: "com.tencent.mm",
      //   scheme: "utopaar"
      // },
      universal: {
        host: "robot.utopaxr.com/utopaar",
        pathKey: "action"
      },
      //apple store
      appstore: "//itunes.apple.com/cn/app/id1490985071",
      //应用宝
      yinyongbao:
        "https://a.app.qq.com/o/simple.jsp?pkgname=com.utopa.utopaar",
      fallback: "https://m.app.so.com/detail/index?from=pcqrcode&id=4174760" //唤端失败后跳转的地址
    };
    // if (hasUniversal) {
      // options = Object.assign({}, options, {
      //   universal: {
      //     host: "utopaar://"
      //   }
      // });
    // }
    const callLib = new CallApp(options);
    const openConfig = {
      path: ua.isAndroid() ? "utopa.com.cn" : "",
      param: {
        type: 1,
        appId,
        token,
        userId,
        sessionKey,
        sessionSecret
      },
      callback(){
        // 自定义处理跳转
        if(!ua.isAndroid()){
          location.href = options.appstore;
        } else {
          let isOpenUrl = false;
          // 处理在系统浏览器和我们Utopa浏览器
          JSBridge.Bridge.WebViewJavascriptBridge.setup(() => {
            JSBridge.Common.GTBridge_Common_Base_OpenOutWebView({url: options.fallback}, () => {
              isOpenUrl = true;
            })
          })
  
          setTimeout(() => { // 正常跳转到应用市场，本来就在其他浏览器的情况下
            if (!isOpenUrl) {
              location.href = options.fallback
            };
          }, 500)
        }
      }
    };
    const schemaUrl = callLib.generateScheme(openConfig);
    console.log({ schemaUrl });
    callLib.open(openConfig);
  }