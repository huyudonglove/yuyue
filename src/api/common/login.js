// eslint-disable-next-line import/no-cycle
import request from '../../common/ajax'

const loginApi = {
  sendLoginCheckCode (params) {
    return request.post({
      reqMethod: 'account.login.sendLoginCheckCode',
      params
    })
  },

  login (params) {
    return request.post({
      reqMethod: 'account.login.doLogin',
      params
    })
  },
  // 注销账号
  disableUser (params) {
    return request.post({
      reqMethod: 'eshop.useraction.disableUser',
      params
    })
  },
  /**
   *  APP环境通过openToken换取accessToken
   *  @openToken
   */
  fetchAccessTokenByOpenToken (openToken) {
    return request.post({
      reqMethod: 'account.access.getChildToken',
      params: {
        openToken
      }
    })
  },
  /**
   * 通过openToken换取accessToken
   * @openToken
   */
  _fetchToken (openToken) {
    return request.post({
      reqMethod: 'account.access.getChildToken',
      params: {
        openToken
      }
    })
  },
  getUserData (params) {
    return request.post({
      reqMethod: 'account.userdata.getUserData',
      params
    })
  }
}
export default loginApi
