/**
 * Created by skz on 2017/10/10 17:48
 * Constants
 */
// =======================================================================
// ---------------------------- 常量 -------------------------------------
// =======================================================================

// system constants
export const AUTHORITY_KEY = 'account_session_authinfo'

export const INTERFACE_VERSION = '1.0'

export const INTERFACE_NEWVERSION = '2.0'

export const USER_TOKEN_KEY = 'utopa_token_key'

export const USER_USER_DATA = 'utopa_userData'

export const USER_ID_KEY = 'utopa_uid_key';

export const SESSION_REQUEST = 'account.session.gen'

// third part constants
// TODO should be config in the server system
export const QINIU_IMAGE_REQUEST_BASEURL = 'http://ox2m2b48s.bkt.clouddn.com/'

export const QINIU_UPLOAD_URL = 'http://upload-z2.qiniu.com'

// =======================================================================
// ------------------------- Status Code About ---------------------------
// =======================================================================
// request status code
export const REQUEST_SUCCESS = 0 // 请求成功
export const REQUEST_FAIL = 1 // 请求失败

// APP
export const SESSION_EXPIRE = 99950001 // 会话过期
export const SESSION_RENEW = 99950002 // 会话续约
export const INVALID_SESSION = 99950003 // 无效会话
export const INVALID_SIGN = 99950004 // 签名失败

export const NOT_LOGIN_USER = 99950005 // 未登录用户
export const TOKEN_EXPIRE = 99950006 // 令牌过期
export const TOKEN_RENEW = 99950007 // 令牌续约

// 后端错误码
export const ERROR_CODE = {
  SYS_OK: 'SYS_OK', // 成功
  SYS_ERROR: 'SYS_ERROR', // 应用程序发生异常，请稍后再试
  SYS_BUSY: 'SYS_BUSY', // 系统繁忙，请稍后再试
  EXPIRE_ERROR: 'EXPIRE_ERROR', // 会话已过期
  SESSION_RENEW: 'SESSION_RENEW', // 会话需续约
  INVALID_SESSION: 'INVALID_SESSION', // 无效会话
  INVALID_APPLICATION: 'INVALID_APPLICATION', // 无效应用
  SIGN_FAILED: 'SIGN_FAILED', // 签名失败
  SIGN_INCORRECT: 'SIGN_INCORRECT', // 签名不正确
  USER_NOT_LOGIN: 'USER_NOT_LOGIN', // 用户未登录
  UNAUTHORIZED: 'UNAUTHORIZED', // 未授权
  TOKEN_EXPIRE: 'TOKEN_EXPIRE', // 令牌过期
  TOKEN_RENEW: 'TOKEN_RENEW', // 令牌需要续约
  PARENT_TOKEN_INVALID: 'PARENT_TOKEN_INVALID', // 父令牌无效
  NO_INTERFACE_AUTH: 'NO_INTERFACE_AUTH', // 没有访问该接口的权限
  SYS_OPT_FREQUENTLY_ERROR: 'SYS_OPT_FREQUENTLY_ERROR' // 操作太频繁
};

// Common Exception Code
export const CREATE_SERVICE_FAIL = 99990003 // 创建业务异常新新实例失败
export const SERVER_CRASH = 99990019 // 系统不舒服
export const SERVICE_NOT_EXIST = 99990021 // 调用服务不存在
export const SERVICE_TYPE_ERROR = 99990022 // 服务类型错误

export const USER_EXIST = 10010010 // 用户已存在
export const UNREGISTER_OR_DISABLE_ACCOUNT = 10010009 // 尚未注册或已禁用
export const BANNED_USER = 10010014 // 用户已被禁用

export const HAS_SUBMENU = 220100001 // 有下级菜单

export const EXCEPTION_STATUS_DESC_MAP = {
  '99990003': '创建业务异常新新实例失败',
  '99990019': '系统不舒服，请稍后再试',
  '99990021': '调用服务不存在',
  '99990022': '服务类型错误',
  '99950005': '用户未登录',
  '10010010': '用户已存在',
  '10010009': '尚未注册或已禁用',
  '10010014': '用户已被禁用',
  '220100001': '有下级菜单，不能删除!',
  '22010004': '用户名或密码错误'
}

export const NEWVERSION_METHODS = [
  // 请求头需要新版本ver=2.0的接口
  'eshop.shopcart.addShopCart',
  'eshop.shopcart.updateShopCart',
  'eshop.shopcart.selectPartOrNot',
  'eshop.shopcart.getShopCartDetail',
  'eshop.shopcart.changeShopCart',
  'eshop.product.cooperator.getProductsByBusinessId',
  'eshop.product.getProductsByBusinessId',
  'eshop.product.getByCategoryId',
  'eshop.product.getCustomCategoryList',
  'eshop.product.getStoreRecommendProduct',
  'eshop.product.cooperator.getIndexProducts',
  'eshop.product.getProductsByBusinessIdStoreId',
  'eshop.product.findgroupbookingGoodsList',
  'eshop.activity.getActiveProductList',
  'eshop.product.getDiscountProducts',
  'eshop.shopcart.selectAllOrNone'
]

// APP相关
export const UTOPA_APP_PROTOCOL = 'utopaclient' // app scheme协议
export const YING_YONG_BAO_LINK = 'https://a.app.qq.com/o/simple.jsp?pkgname=com.cn.utopa'
export const APPLE_STORE_LINK = 'https://itunes.apple.com/cn/app/id1110311655'
// export const DOWNLOAD_APP_LINK = 'https://www.myutopa.com/m/download/index.html'
export const DOWNLOAD_APP_LINK = 'https://www.myutopa.com/m/download?channelId=306' // h5下载的推广渠道306

// 跳转到APP页面的指令编码
export const APP_CMD = {
  HOME: 'C0010100',
  WEBVIEW: '', // 为空
  GOODS_DETAILS: 'C0020030000', // {"productId":"商品id","storeId":"店铺id","isGroupBuy":"是否拼团"}
  GROUP_BUY_GOODS_DETAILS: 'C0020030001', // {"groupBuyId":"拼团商品id"}
  STORE: 'C0040010300'
}
