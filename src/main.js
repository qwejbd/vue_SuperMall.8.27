import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 动态计算rem的一个插件
import "lib-flexible/flexible";
// vant ui组件库 css
import "vant/lib/index.css";
// vant ui组件库
import "./plugins/vant";
// element ui 组件库
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// 时间转换
import moment from "moment/moment";
// 封装的网络接口
import Network from "./Network/index";
// =============================================
Vue.filter("moment", function(value, formatString) {
  formatString = formatString || "YYYY-MM-DD HH:mm:ss";
  return moment(value).format(formatString);
});
// =============================================
Vue.config.productionTip = false;
// 封装网络接口
Vue.prototype.$Network = Network;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
