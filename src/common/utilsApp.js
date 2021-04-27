/* eslint-disable */
import CallApp from 'callapp-lib';
import ua from './ua';
import JSBridge from '@/jsbridge'
/**
 * 从H5打开ar app
 *
 */
var urlC=window.location.href.split('#')[0]
export function openArApp(config = {}) {
    const {
      appId = "",
      token = "",
      userId = "",
      sessionKey = "",
      sessionSecret = ""
    } = config;
    let options = {
      scheme: { protocol: "utopaars11" },
      // intent: {
      //   package: "com.tencent.mm",
      //   scheme: "utopaar"
      // },
      universal: {
//      host: "robot.utopaxr.com/utopaar",
        host: "robot.utopaxr.com/utopaars11",
        pathKey:"action"
      },
      //apple store
      appstore: "https://itunes.apple.com/cn/app/id1490985071",
      //应用宝
      yinyongbao:
        "https://a.app.qq.com/o/simple.jsp?pkgname=com.utopa.utopaar",
        //       fallback: "https://m.app.so.com/detail/index?from=pcqrcode&id=4174760" //唤端失败后跳转的地址
        fallback: `${urlC}test.html?${config}` //唤端失败后跳转的地址
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
        type: '',
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
          console.log(111,22)
        } else {
          let isOpenUrl = false;
      console.log(333)
          // 处理在系统浏览器和我们Utopa浏览器
        JSBridge.Bridge.WebViewJavascriptBridge.setup(() => {
        JSBridge.Common.GTBridge_Common_Base_OpenOutWebView({url: options.fallback}, () => {
          console.log(44,444)
//               isOpenUrl = true;
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
