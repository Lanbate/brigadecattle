//热销推荐
<template>
  <div>
    <div class="recommednt-title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/datali/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
    <a class="item-bootm">
      查看更多
    </a>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
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
  color :#8B8989
}

.item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;
}

.item-img {
  width: 1.7rem;
  height: 1.7rem;
  padding: 0.1rem;
}

.item-info {
  flex: 1;
  padding: 0.1rem;
  min-width: 0;
}

.item-title {
  font-weight: bold;
  line-height: 0.54rem;
  font-size: 0.32rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-desc {
  line-height: 0.4rem;
  color: #ccc;
  font-size: 0.1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-button {
  line-height: 0.44rem;
  margin-top: 0.2rem;
  background: #ff9300;
  padding: 0.1rem 0.2rem 0.1rem 0.2rem;
  border-radius: 0.07rem;
  color: #fff;
  font-weight:bold
}
.item-bootm{
    display:block
    padding-top :0.2rem
    text-align: center;
}
</style>
