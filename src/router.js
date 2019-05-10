import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/home/home";
import City from "./pages/city/City";
import Datali from "./pages/datali/Datali.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/city",
      name: "City",
      component: City
    },
    {
      path: "/datali/:id",
      name: "Datali",
      component: Datali
    }
  ]
});
