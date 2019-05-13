import Vue from "vue";
import Router from "vue-router";
// import Home from "./pages/home/home";
// import City from "./pages/city/City";
// import Datali from "./pages/datali/Datali.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      //异步加载
      component: () => import("./pages/home/home")
      // component: Home
    },
    {
      path: "/city",
      name: "City",
      // component: City
      component: () => import("./pages/city/City")
    },
    {
      path: "/datali/:id",
      name: "Datali",
      // component: Datali
      component: () => import("./pages/datali/Datali.vue")
    }
  ]
});
