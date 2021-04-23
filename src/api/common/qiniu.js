import request from '@/common/ajax'

export function getQiNiuToken () {
  return request.get({
    reqMethod: 'common.upload.getUpToken',
    params: {}
  })
}

export function getImageUrlByQiniuKey (key) { // 根据图片key获取图片
  return request.post({
    reqMethod: 'common.upload.getUrlByKey',
    params: {
      key
    }
  })
}
