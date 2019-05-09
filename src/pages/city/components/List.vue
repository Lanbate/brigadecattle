//城市列表
<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="buttons">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id">
            <div class="buttons">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div
            class="liem border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
          >
            {{ innerItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "CityList",
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.list{
    overflow :hidden
    position :absolute
    top:1.78rem
    left:0
    bottom :0
    bottom :0
}

.title {
  line-height: 0.54rem;
  background: #eee;
  padding-left: 0.2rem;
  color: #666;
  font-size: 0.26rem;
}

.button-list {
  overflow: hidden;
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;
}

.button-wrapper {
  float: left;
  width: 33.33%;
}

.buttons {
  width: 1.8rem;
  padding: 0.1rem;
  margin: 0.1rem;
  text-align: center;
  border: 0.03rem solid #ccc;
}
.liem{
    line-height :.7rem
    color :#666
    padding-left :.2rem
}
</style>
