import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/reset.css";
import "./assets/styles/border.css";
import "./assets/styles/iconfont.css";
import VueAwesomeSwiper from "vue-awesome-swiper"; //轮播插件
import "babel-polyfill";
import Es6Promise from "es6-promise";
import "swiper/dist/css/swiper.css";
import fastClick from "fastclick";

require("es6-promise").polyfill();
Es6Promise.polyfill();
Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
}).$mount("#app");
