<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom" @click="handleBannerClick()">
        <span class="item-title-icon"></span>
        {{ item.title }}
      </div>
      <div v-if="item.children" class="item-chilren">
        <detali-list :list="item.children" v-show="showsaz"></detali-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetaliList",
  data() {
    return {
      showsaz: false
    };
  },
  props: {
    list: Array
  },
  methods: {
    handleBannerClick() {
      if (this.showsaz) {
        this.showsaz = false;
      } else {
        this.showsaz = true;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.item-title-icon {
  position: relative;
  left: 0.06rem;
  top: 0.06rem;
  display: inline-block;
  width: 0.36rem;
  height: 0.36rem;
  background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat;
  margin-right: 0.1rem;
  background-size: 0.4rem 3rem;
}

.item-title {
  line-height: 0.8rem;
  font-size: 0.32rem;
  padding: 0.2rem;
}

.item-chilren {
  padding: 0 0.4rem;
}
</style>
