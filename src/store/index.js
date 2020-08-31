import Vue from "vue";
import Vuex from "vuex";
import swiper from "./Home/Home";
import swiperNext from "./Home/SwipeNext";
import list from "./Home/ShopList";
import Del from "./Home/Del";
import CART from "./Home/Card";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    swiper,
    swiperNext,
    list,
    Del,
    CART,
  },
});
