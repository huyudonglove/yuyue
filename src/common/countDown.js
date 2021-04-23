
/*
  金钱格式化   s 金钱   n 要保留的小数位
*/
// export function fmoney (s, n) {
//   n = n > 0 && n <= 20 ? n : 2
//   s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + ''
//   var l = s.split('.')[0].split('').reverse()
//   var r = s.split('.')[1]
//   t = ''
//   for (i = 0; i < l.length; i++) {
//     t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? ',' : '')
//   }
//   return t.split('').reverse().join('') + '.' + r
// }

/**
 * 金钱格式化    s 金钱(分单位)   n 要保留的小数位
 * 返回 数组
 * 把分单位，变成元单位
 * @param {*} s  金钱(分单位)
 * @param {*} b  n 要保留的小数位
 */
export function getMoneyFormat (s, b) {
  s = s / 100
  s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(2) + ''
  if (b) {
    let arr = s.split('.')
    return [arr[0], '.' + arr[1]]
  }
  return s
}
