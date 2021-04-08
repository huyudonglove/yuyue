import Vue from 'vue';
import Vuex from 'vuex';
import pagination from './modules/pagination';
import navMenu from './modules/navMenu';
import timeSwitch from  './modules/timeSwitch';
Vue.use(Vuex);
const store=new Vuex.Store({
  modules:{
    pagination,
    navMenu,
    timeSwitch
  }
})
export default store;
