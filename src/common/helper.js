/**
 * Created by skz on 2017/10/10 18:03
 * Common Method
 */
const _toString = Object.prototype.toString

export const Helper = {
  isUndef: function (v) {
    return v === undefined || v === null
  },
  isDef: function (v) {
    return v !== undefined && v !== null
  },
  isTrue: function (v) {
    return v === true
  },
  isFalse: function (v) {
    return v === false
  },
  /**
   * Check if value is primitive
   */
  isPrimitive: function (value) {
    return (
      typeof value === 'string' ||
      typeof value === 'number' ||
      typeof value === 'boolean'
    )
  },
  /**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   */
  isObject: function (obj) {
    return obj !== null && typeof obj === 'object'
  },
  isString: function (str) {
    return typeof str === 'string'
  },
  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */
  isPlainObject: function (obj) {
    return _toString.call(obj) === '[object Object]'
  },
  isArray: function (arr) {
    return _toString.call(arr) === '[object Array]'
  },
  isRegExp: function (v) {
    return _toString.call(v) === '[object RegExp]'
  },
  /**
   * Check if val is a valid array index.
   */
  isValidArrayIndex: function (val) {
    var n = parseFloat(val)
    return n >= 0 && Math.floor(n) === n && isFinite(val)
  },
  /**
   * Convert a value to a string that is actually rendered.
   */
  toString: function (val) {
    return val == null
      ? ''
      : typeof val === 'object'
        ? JSON.stringify(val, null, 2)
        : String(val)
  },
  /**
   * Convert a input value to a number for persistence.
   * If the conversion fails, return original string.
   */
  toNumber: function (val) {
    var n = parseFloat(val)
    return isNaN(n) ? val : n
  },
  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   */
  makeMap: function (str, expectsLowerCase) {
    var map = Object.create(null)
    var list = str.split(',')
    for (var i = 0; i < list.length; i++) {
      map[list[i]] = true
    }
    return expectsLowerCase
      ? function (val) {
        return map[val.toLowerCase()]
      }
      : function (val) {
        return map[val]
      }
  },
  sort: function (val) {
    const keys = Object.keys(val).sort()
    let sortParam = {}
    keys.forEach((key, index) => {
      sortParam[key] = val[key]
    })
    return sortParam
  },
  deepSort: function (params) {
    for (let k in params) {
      if (this.isArray(params[k])) { // 数组
        for (let i = 0; i < params[k].length; i++) {
          if (this.isObject(params[k][i])) {
            params[k][i] = this.deepSort(params[k][i])
          }
        }
      } else if (this.isObject(params[k])) { // JSON
        params[k] = this.deepSort(params[k])
      }
    }
    return this.sort(params)
  },
  parseTime: function (time, fmt) {
    let date
    fmt = fmt || 'yyyy-MM-dd hh:mm:ss'
    date = this.isObject(time) ? time : new Date(time)
    const o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'q+': Math.floor((date.getMonth() + 3) / 3),
      'S': date.getMilliseconds()
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (let k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k])
          : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
    return fmt
  },
  parseNumberToChinese: function (number) {
    return {
      0: '零',
      1: '一',
      2: '二',
      3: '三',
      4: '四',
      5: '五',
      6: '六',
      7: '七',
      8: '八',
      9: '久'
    }[number]
  },
  bytesToSize: function (bytes) {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return (bytes / Math.pow(k, i)) + ' ' + sizes[i]
  },
  log: function () {
    const msg = '[Logger] ' + Array.prototype.join.call(arguments, ' ')
    if (process.env.NODE_ENV === 'development') {
      if (window.console && window.console.log) {
        window.console.log(msg)
      } else if (window.opera && window.opera.postError) {
        window.opera.postError(msg)
      }
    }
  },
  // 传入结束时间倒计时
  timeDown: function (end) {
    function doubleNum (str) {
      if (str < 10) {
        return '0' + str
      } else {
        return str
      }
    }
    let endTime = new Date(end).getTime()
    let nowTime = new Date().getTime()
    let shengyuD = '00'
    let shengyuH = '00'
    let shengyuM = '00'
    let S = '00'
    if (endTime - nowTime < 0) {
      shengyuD = '00'
      shengyuH = '00'
      shengyuM = '00'
      S = '00'
    } else {
      let remainingTime = endTime - nowTime
      shengyuD = doubleNum(parseInt(remainingTime / (60 * 60 * 24 * 1000))) // 转换为天
      var D = parseInt(remainingTime) - parseInt(shengyuD * 60 * 60 * 24 * 1000) // 除去天的毫秒数
      shengyuH = doubleNum(parseInt(D / (60 * 60 * 1000))) // 除去天的毫秒数转换成小时
      var H = D - shengyuH * 60 * 60 * 1000 // 除去天、小时的毫秒数
      shengyuM = doubleNum(parseInt(H / (60 * 1000))) // 除去天的毫秒数转换成分钟
      S = doubleNum(
        parseInt(
          (remainingTime -
            shengyuD * 60 * 60 * 24 * 1000 -
            shengyuH * 60 * 60 * 1000 -
            shengyuM * 60 * 1000) /
          1000
        )
      ) // 除去天、小时、分的毫秒数转化为秒
      // console.log(
      //   shengyuD + "天" + shengyuH + "小时" + shengyuM + "分" + S + "秒"
      // );
    }

    let obj = {
      D: shengyuD,
      H: shengyuH,
      M: shengyuM,
      S: S
    }
    return obj
  },
  // 传入当前时间和 结束时间倒计时
  secondTimeDown: function (nowTime, endTime) {
    function doubleNum (str) {
      if (str < 10) {
        return '0' + str
      } else {
        return str
      }
    }
    let shengyuH = '00'
    let shengyuM = '00'
    let shengyuS = '00'
    let time = 0
    if (new Date(endTime).getTime() >= new Date(nowTime).getTime()) {
      time = new Date(endTime).getTime() - new Date(nowTime).getTime()
    } else if (new Date(endTime).getTime() < new Date(nowTime).getTime()) {
      time = new Date(nowTime).getTime() - new Date(endTime).getTime()
    }
    shengyuH = doubleNum(parseInt(time / (60 * 60 * 1000))) // 除去天的毫秒数转换成小时
    var H = parseInt(time) - shengyuH * 60 * 60 * 1000 // 除去天、小时的毫秒数
    shengyuM = doubleNum(parseInt(H / (60 * 1000))) // 除去天的毫秒数转换成分钟
    shengyuS = doubleNum(
      parseInt(
        (time -
          shengyuH * 60 * 60 * 1000 -
          shengyuM * 60 * 1000) /
        1000
      )
    ) // 除去天、小时、分的毫秒数转化为秒
    // console.log(
    //   shengyuD + "天" + shengyuH + "小时" + shengyuM + "分" + S + "秒"
    // );
    let obj = {
      H: shengyuH,
      M: shengyuM,
      S: shengyuS
    }
    return obj
  },
  // 传入计算好的时间进行倒计时
  timeOut: function (val) {
    function doubleNum (str) {
      if (str < 10) {
        return '0' + str
      } else {
        return str
      }
    }
    let shengyuD = '00'
    let shengyuH = '00'
    let shengyuM = '00'
    let shengyuS = '00'
    if (val > 0) {
      shengyuD = doubleNum(parseInt(val / (60 * 60 * 24 * 1000))) // 转换为天
      var D = parseInt(val) - parseInt(shengyuD * 60 * 60 * 24 * 1000) // 除去天的毫秒数
      shengyuH = doubleNum(parseInt(D / (60 * 60 * 1000))) // 除去天的毫秒数转换成小时
      var H = D - shengyuH * 60 * 60 * 1000 // 除去天、小时的毫秒数
      shengyuM = doubleNum(parseInt(H / (60 * 1000))) // 除去天的毫秒数转换成分钟
      shengyuS = doubleNum(
        parseInt(
          (val -
            shengyuD * 60 * 60 * 24 * 1000 -
            shengyuH * 60 * 60 * 1000 -
            shengyuM * 60 * 1000) /
          1000
        )
      ) // 除去天、小时、分的毫秒数转化为秒
      // console.log(
      //   shengyuD + "天" + shengyuH + "小时" + shengyuM + "分" + S + "秒"
      // );
    }
    let obj = {
      D: shengyuD,
      H: shengyuH,
      M: shengyuM,
      S: shengyuS
    }
    return obj
  }
}
