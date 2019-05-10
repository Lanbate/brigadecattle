<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_640x360_b00af8c3.jpg"
      />
      <div class="banner-info">
        <div class="banner-tittle">故宫(AAAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe602;</span>2
        </div>
      </div>
    </div>
    <common-gallary
      :imgs="imgs"
      v-show="showGallary"
      @close="handleBannerclose"
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from "../../common/gallary/Gallary";

export default {
  name: "DetaliBanner",
  data() {
    return {
      showGallary: false,
      imgs: [
        "http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_r_800x800_6360f514.jpg",
        "http://img1.qunarzz.com/wugc/p123/201211/19/a2045d091f02b25493835fbb.png_r_800x800_c59f0eba.png"
      ]
    };
  },
  components: {
    CommonGallary
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
