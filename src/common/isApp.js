import JSBridge from '../jsbridge';
import {
  setToken,
  removeToken,
  setUserData,
  removeUserData,
  removeAuthorityInfo,
  setUID
} from '../common/auth';
import loginApi from '../api/common/login';
import * as videoApi from '../api/common/video-api';
import ua from './ua';
const isApp = {
  methods: {
    getAcToken() {
      return new Promise(async (resolve, reject) => {
        // let acToken = localStorage.getItem('acToken')
        // 不是优托邦APP内
        // console.log('getAcToken', acToken)
        if (!ua.isUtopaApp() && ['local', 'dev','test'].includes(process.env.VUE_APP_BUILD_ENV)) {
          let openToken = 'fKqSCSdE7fRpdsVJdPcmTFnafqnu7kfhH5jTd2a47pc1LqEN';
          let getData = await loginApi._fetchToken(openToken);
          let accessToken = getData.data.accessToken;
          // localStorage.setItem('acToken', accessToken);
          setToken(accessToken);
          let userData = await videoApi.getUserData({
            accessToken,
          });

          if (userData.code === 0) {
            setUserData(userData.data);
          }
          console.log('不是优托邦APP内', '用户数据', userData);
          resolve(accessToken);
          return;
        }

        JSBridge.Common.Caller_Common_Base_getOpenToken('', (openToken) => {
          console.log('openToken=' + openToken);
          if (openToken) {
            loginApi
              ._fetchToken(openToken)
              .then(async (rep) => {
                if (rep.code === 0) {
                  let accessToken = rep.data.accessToken;
                  // localStorage.setItem('acToken', accessToken);
                  setToken(accessToken);

                  let userData = await videoApi.getUserData({
                    accessToken,
                  });

                  if (userData.code === 0) {
                    setUserData(userData.data);
                    setUID(userData.data.uid);
                  }
                  resolve(accessToken);
                } else {
                  localStorage.acToken = '';
                  removeToken();
                  removeUserData();
                  removeAuthorityInfo();
                  resolve('');
                }
              })
              .catch((rep) => {
                reject(rep);
              });
          } else {
            localStorage.acToken = '';
            removeToken();
            removeUserData();
            removeAuthorityInfo();
          }
        });
      });
    },
    async getUToken() {
      let token = await this.getAcToken();
      return token;
    },
  },
};

export default isApp;
