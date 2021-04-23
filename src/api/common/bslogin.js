import request from '@/common/ajax'
export function fetchAccessTokenByOpenToken (openToken) {
    return request.post({
      reqMethod: 'account.access.getChildToken',
      params: {
        openToken
      }
    })
  }
