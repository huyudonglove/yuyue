// eslint-disable-next-line import/no-cycle
import request from '@/api/primeval/common/ajax'

/**
 * 获取用户信息
 * @param
 */

export function getUserData (params) {
  return request.post({
    reqMethod: 'account.userdata.getUserData',
    params
  })
}

/**
 * 根据店铺id和商品id获取商品
 * @param query
 */
export function getProductById (query) {
  return request.post({
    reqMethod: 'utopa.eshop.product.getProduct',
    params: query
  })
}
