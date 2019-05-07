//多选项
<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
            <p class="icon-text">{{ item.desc }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// import { parse } from "path";
// import { constants } from "crypto";
export default {
  name: "HomeIcons",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        autoplay: false
      }
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
@import '~@/assets/styles/mixins.styl';

.icons >>> .swiper-container {
  width: 100%;
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
  margin-top: -0.06rem;
}
.icons{
  margin-top 0.2rem
}

.icon {
  position: relative;
  overflow: hidden;
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
}

.icon-img {
  position: absolute;
  top: 0;
  left: 0;
  resize: 0;
  bottom: 0.44rem;
  box-sizing: border-box;
  padding: 0.1rem;
}

.icon-img-content {
  display: block;
  margin-left: 0.2rem;
  height: 100%;
}

.icon-text {
  text-align: center;
  margin-left: 10%;
  font-size: 13px;
  color: $darktextcolor;
  ellipsis()
}
</style>
