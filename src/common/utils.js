/* eslint-disable */
import CallApp from 'callapp-lib';
import {
  YING_YONG_BAO_LINK,
  APPLE_STORE_LINK,
  DOWNLOAD_APP_LINK,
  UTOPA_APP_PROTOCOL
} from './constants'

const count = () => {
  return 123
}

const deepClone = (obj) => {
  //判断拷贝的要进行深拷贝的是数组还是对象，是数组的话进行数组拷贝，对象的话进行对象拷贝
  var objClone = Array.isArray(obj) ? [] : {};
  //进行深拷贝的不能为空，并且是对象或者是
  if (obj && typeof obj === "object") {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === "object") {
          objClone[key] = deepClone1(obj[key]);
        } else {
          objClone[key] = obj[key];
        }
      }
    }
  }
  return objClone;
}
export {
  count,
  deepClone
}


export function combins (...args) {
  if (args.length < 2) return args[0] || [];
  const that = {
    index: 0,
    nth (n) {
      const result = [];
      for (let d = 0; d < this.dim; d += 1) {
        const l = this[d].length;
        const i = n % l;
        result.push(this[d][i]);
        n -= i;
        n /= l;
      }
      return result;
    },
    next () {
      if (this.index >= this.size) return null;
      const result = this.nth(this.index);
      this.index += 1;
      return result;
    },
    size: 1,
    dim: 0,
  };
  let size = 1;
  for (let i = 0; i < args.length; i += 1) {
    size *= args[i].length;
    that[i] = args[i];
  }
  that.size = size;
  that.dim = args.length;
  return that;
}

/**
 * 根据多个数组求笛卡尔积
 * @param args
 */
export function descartes (arr, callback) {
  if (!callback) return [];
  if (!Array.isArray(arr) || arr.length < 2) {
    return arr[0].map((n, i) => callback([n], i)) || [];
  }

  let index = 0;
  const result = [];
  const c = combins(...arr);
  let n = c && c.next();
  while (n) {
    result.push(callback(n, index));
    index += 1;
    n = c && c.next();
  }
  return result;
}


/**
 * 从H5打开优托邦APP
 */
export function openUtopaApp (options = {}) {
  const { cmd = 'C0000020101', params, url = '', h5Params, timeout, onError } = options;

  const callOptions = {
    scheme: {
      protocol: UTOPA_APP_PROTOCOL,
    },
    yingyongbao: YING_YONG_BAO_LINK,
    appstore: APPLE_STORE_LINK,
    fallback: DOWNLOAD_APP_LINK,
    timeout: timeout || 2500
  };

  const callLib = new CallApp(callOptions);

  const data = encodeURIComponent(JSON.stringify({
    cmd,
    url,
    params: JSON.stringify(params),
    h5Params: JSON.stringify(h5Params)
  }))

  callLib.open({
    path: 'homepage',
    param: {
      data
    },
    callback: onError
  })

  const schemaUrl = callLib.generateScheme({
    path: 'homepage',
    param: {
      data
    }
  })

  console.log({ schemaUrl });
}
