import request from '@/common/ajax'
/**
 * 获取微信签名
 * @param
 */

export function getWxConfig (url) {
  return request.post({
    reqMethod: 'base.wechat.getWxConfig',
    params: {
      url: url
    }
  })
}

/**
 * 获取微信授权链接
 * @param
 */

export function getOauthUrl (params) {
  return request.post({
    reqMethod: 'account.wechatApp.getOauthUrl',
    params
  })
}

/**
 * 获取店铺推荐商品列表
 * businessId
 * storeId
 */

export function getStoreRecommendProducts (params) {
  return request.post({
    reqMethod: 'eshop.product.getStoreRecommendProduct',
    params
  })
}
