<template>
  <div>
    <loading v-if="isloading"></loading>
    <detali-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    ></detali-banner>
    <detali-header></detali-header>
    <detali-recommend :Recommendtous="Recommendtous"></detali-recommend>
    <detali-list :list="list"></detali-list>
    <div class="content"></div>
  </div>
</template>

<script>
import DetaliBanner from "./components/Banner";
import DetaliHeader from "./components/Header";
import DetaliList from "./components/list";
import DetaliRecommend from "./components/Recommend";
import Loading from "../common/gallary/load";
import axios from "axios";
export default {
  name: "Datali",
  components: {
    DetaliBanner,
    DetaliHeader,
    DetaliList,
    DetaliRecommend,
    Loading
  },
  data() {
    return {
      sightName: "",
      bannerImg: "",
      gallaryImgs: [],
      list: [],
      Recommendtous: [],
      isloading: true,
      bate: "2"
    };
  },
  methods: {
    getDatilInfo() {
      axios
        .get("https://api.myjson.com/bins/11edcq", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.handleGetDataSucc);
    },
    handleGetDataSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const datas = res.data;
        this.sightName = datas.sightName;
        this.bannerImg = datas.bannerImg;
        this.gallaryImgs = datas.gallaryImgs;
        this.list = datas.categoryList;
        this.Recommendtous = datas.Recommendtous;
        this.isloading = false;
      }
    }
  },
  mounted() {
    this.getDatilInfo();
  }
};
</script>

<style lang="stylus" scoped>
.content{

}
</style>
