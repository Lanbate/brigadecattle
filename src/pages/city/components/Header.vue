//城市首字母
<template>
  <div class="header">
    城市选择
    <!-- 点击 -->
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CityHeader"
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
    .header{
        position relative
        top:1px
        overflow :hidden
        height :$headeheight
        line-height :$headeheight
        text-align :center
        color :#fff
        background :$bgColor
        font-size :0.32rem
    }
    .header-back{
        color :#fff
        position :absolute
        top:0
        left :0
        width :.64rem
        text-align :center
        font-size :0.4rem
    }
</style>
