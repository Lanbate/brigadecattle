<template>
  <div class="container" @click="handleGallarrClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(intem, index) of imgs" :key="index">
          <img class="gallary-img" :src="intem" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonGallary",
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        observeParents: true,
        observer: true
      }
    };
  },
  methods: {
    handleGallarrClick() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="stylus" scoped>
.container>>> .swiper-container
  overflow :inherit
.container{
  display :flex
  flex-direction :column
  justify-content :center
  z-index :99
  position :fixed
  left :0
  right :0
  top:0
  bottom :0
  background :#000
}
.wrapper{
  height: 0
  width: 100%
  padding-bottom :100%
}
.gallary-img{
  width :100%
}
.swiper-pagination{
  color :#fff
  bottom :-3rem
}
</style>
