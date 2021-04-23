// import Vue from 'vue'
// import moment from 'moment/moment'
export default {

  install () {
    Vue.filter('formatMoney2Yuan', money => {
      return (parseInt(money) / 100).toFixed(2)
    })
    Vue.filter('formatNull', function (data, nullPlaceholder = '暂无') {
      if (!data && isNaN(data)) {
        return nullPlaceholder
      } else {
        return data
      }
    })
    Vue.filter('dateFormat', function (val, formatStr) {
      return moment(+val).format(formatStr)
    })
    Vue.filter('newlinesFormat2Br', function (val) {
      return val.replace(/(\r\n)|(\n)|(\\n)/g, '<br>')
    })
  }
}
