//周末去哪儿
<template>
  <div>
    <div class="recommednt-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
    <a class="item-bootm">查看更多</a>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props: {
    list: Array
  },
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl';

.recommednt-title {
  margin-top: 0.2rem;
  line-height: 0.7rem;
  background: #EDEDED;
  text-indent: 0.2rem;
  color: #8B8989;
}

.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 37%;
}

.item-img {
  width: 100%;
}

.item-title {
  font-weight: bold;
  line-height: 0.54rem;
  font-size: 0.25rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left :0.2rem
}

.item-desc {
  line-height: 0.4rem;
  color: #ccc;
  font-size: 0.2rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left :0.2rem
}

.item-bootm {
  display: block;
  padding-top: 0.2rem;
  text-align: center;
}
</style>
