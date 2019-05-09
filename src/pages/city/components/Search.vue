//搜索
<template>
  <div>
    <div class="search">
      <input
        v-model="keyword"
        class="search-iput"
        type="text"
        placeholder="输入城市名或者拼音"
      />
    </div>
    <div class="search-content" ref="searom" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
        >
          {{ item.name }}
        </li>
        <li class="search-item border-bottom" v-show="hashList">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
// import { clearTimeout, setTimeout } from 'timers';
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  computed: {
    hashList() {
      return !this.list.length;
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              // console.log(value);
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.searom);
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
    .search{
        height 0.72rem
        padding 0.1rem
        background :$bgColor
    }
    .search-iput{
        box-sizing :border-box
        height 0.62rem
        width 100%
        line-height :.62rem
        text-align :center
        border-radius :0.08rem
        color :#666
        padding :0 0.1rem
        }
      .search-content{
        z-index:1
        overflow :hidden
        position :absolute
        top:1.68rem
        left :0
        right :0
        bottom :0
        background #eee
      }
      .search-item{
        line-height :.62rem
        padding-left :.2rem
        background :#fff
        color :#666
      }
</style>
