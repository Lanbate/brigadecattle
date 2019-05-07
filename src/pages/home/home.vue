<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="inconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="WeekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import axios from "axios";

export default {
  name: "Home",
  components: {
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper,
    HomeIcons: HomeIcons,
    HomeRecommend: HomeRecommend,
    HomeWeekend: HomeWeekend
  },
  data() {
    return {
      city: "",
      swiperList: [],
      inconList: [],
      recommendList: [],
      WeekendList: []
    };
  },
  methods: {
    getHomeInfo() {
      axios.get("https://api.myjson.com/bins/1bjw5e").then(res => {
        this.getHomeInfoSucc(res);
      });
    },
    getHomeInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.city = data.city;
        this.swiperList = data.swiperList;
        this.inconList = data.inconList;
        this.recommendList = data.recommendList;
        this.WeekendList = data.WeekendList;
      }
    }
  },
  mounted() {
    this.getHomeInfo();
  }
};
</script>

<style>
.home {
  font-size: 50px;
}
</style>
