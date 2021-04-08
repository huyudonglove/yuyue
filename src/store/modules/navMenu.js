import http from '../../http'
import router from '../../router'
import {Message} from 'element-ui'

const state = {
  menus: []
}
const mutations = {
  init (state, payload) {
    // console.log(payload,'payload')
    state.menus = payload.res.data.data
  }
}
const actions = {
  menuInit ({commit}, params) {
    http.post('/api/live/web/user/treeMenu', params).then(res => {
      if (res.code) {
        Message.error(res.msg)
      } else {
        commit('init', { res, params})
      }
    }).catch(err => {
    })
  }

}
export default {
  namespaced: true, // 用于在全局引用此文件里的方法时标识这一个的文件名
  state,
  actions,
  mutations
}
