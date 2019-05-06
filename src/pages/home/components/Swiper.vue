<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true,
        autoplay: 5000
      },
      swiperList: [
        {
          id: "0001",
          imgUrl:
            "https://img1.qunarzz.com/vc/ee/d8/c9/ac32eda0740b0d3116a0f926da.jpg"
        },
        {
          id: "0002",
          imgUrl:
            "https://img1.qunarzz.com/vc/2c/2b/19/b7c1c3e72a2c57ccf59e34c374.jpg"
        },
        {
          id: "0003",
          imgUrl:
            "https://img1.qunarzz.com/vc/bf/9d/a3/67b7b37511fa26a78298bf1da1.jpg"
        },
        {
          id: "0004",
          imgUrl:
            "https://img1.qunarzz.com/vc/b8/25/51/f6173dbd12c1a0f783abe73855.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.swiper-img{
    width :100%
}
.wrapper{
    width :100%
    height :0
    overflow:hidden
    padding-bottom :31.25%
    background :#eee
}
</style>
