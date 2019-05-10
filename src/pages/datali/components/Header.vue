<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont datali-Headericon">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="OpacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div> </router-link
      >景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: "DetaliHeader",
  data() {
    return {
      showAbs: true,
      OpacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop;
      //   console.log(top)
      if (top > 60) {
        let opactys = top / 160;
        opactys = opactys > 1 ? 1 : opactys;
        this.OpacityStyle = {
          opacity: opactys
        };
        //   console.log(this.opacityStyle.opacty)
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  },
  activated() {
    window.addEventListener("scroll", this.handleScroll);
  },
  deactivated() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 0.4rem;
  background: rgba(0, 0, 0, 0.8);
  text-align: center;
  line-height: 0.8rem;
}

.datali-Headericon {
  color: #fff;
  font-size: 0.4rem;
}

.header-fixed {
  position: fixed;
  top: 0;
  left :0
  right  :0
  height: $headeheight;
  line-height: $headeheight;
  text-align: center;
  color: #fff;
  background: $bgColor;
  font-size: 0.32rem;
}

.header-fixed-back {
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: 0.64rem;
  text-align: center;
  font-size: 0.4rem;
}
</style>
