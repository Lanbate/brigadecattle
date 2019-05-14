<template>
  <div>
    <loading v-if="isloading"></loading>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :letter="letter" :cities="cities" :hot="hotCities"></city-list>
    <city-alphabet :cities="cities" @change="handelechangge"></city-alphabet>
  </div>
</template>

<script>
import axios from "axios";
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
import Loading from "../common/gallary/load";

export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
    Loading
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: "",
      isloading: true
    };
  },
  methods: {
    getCityInfo() {
      axios.get("https://api.myjson.com/bins/6skui").then(res => {
        this.handleGetCityInfoSucc(res);
      });
    },
    handleGetCityInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
        this.isloading = false;
      }
    },
    handelechangge(letter) {
      this.letter = letter;
    }
  },
  mounted() {
    this.getCityInfo();
  }
};
</script>

<style lang="stylus" scoped>
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>
