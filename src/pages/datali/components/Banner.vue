<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-tittle">{{ sightName }}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe602;</span
          >{{ this.gallaryImgs.length }}
        </div>
      </div>
    </div>
    <common-fade>
      <common-gallary
        :imgs="gallaryImgs"
        v-show="showGallary"
        @close="handleBannerclose"
      ></common-gallary>
    </common-fade>
  </div>
</template>

<script>
import CommonGallary from "../../common/gallary/Gallary";
import CommonFade from "../../common/gallary/fade";

export default {
  name: "DetaliBanner",
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data() {
    return {
      showGallary: false
    };
  },
  components: {
    CommonGallary,
    CommonFade
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    handleBannerclose() {
      this.showGallary = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 56%;
}

.banner-img {
  width: 100%;
}

.banner-info {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  line-height: 0.6rem;
  color: #fff;
  background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
}

.banner-tittle {
  flex: 1;
  font-size: 0.32rem;
  padding-left: 0.22rem;
}

.banner-number {
  margin-top: -0.1rem;
  padding: 0.2rem 0.3rem 0.2rem 0.3rem;
  height: 0.1rem;
  line-height: 0.15rem;
  border-radius: 0.2rem;
  background-color: rgba(0, 0, 0, 0.8);
}

.banner-icon {
  padding-right: 0.1rem;
  font-size: 0.32rem;
}
</style>
