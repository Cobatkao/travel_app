import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// 重置浏览器样式
import "./assets/style/reset.css";
// 解决移动端1px问题
import "./assets/style/border.css";
// 解决click 300ms延迟问题

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
