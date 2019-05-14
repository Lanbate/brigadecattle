import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let defaultCity = "北京";
try {
  if (localStorage.citys) {
    defaultCity = localStorage.citys;
  }
} catch (e) {
  // eslint-disable-next-line no-console
  console.log(e);
}

export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  getters: {
    doubleCity(state) {
      return state.city + " " + state.city;
    }
  },
  actions: {
    changeCity(ctx, city) {
      // eslint-disable-next-line no-console
      ctx.commit("changeCity", city);
    }
  },
  mutations: {
    changeCity(state, city) {
      state.city = city;
      try {
        localStorage.citys = city;
        defaultCity = localStorage.citys;
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    }
  }
});
