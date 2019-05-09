import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let defaultCity = "上海";
try {
  if (localStorage.city) {
    defaultCity = localStorage.city;
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
        localStorage.city = city;
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    }
  }
});
