import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// 重置浏览器样式
import "@s/reset.css";
// 解决移动端1px问题
import "@s/border.css";
// 全局使用iconfont
import "@s/iconfont.css";
// 轮播样式
import "swiper/dist/css/swiper.css";

// 解决click 300ms延迟问题
import fastClick from "fastclick";
// 引入轮播
import VueAwesomeSwiper from "vue-awesome-swiper";

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
