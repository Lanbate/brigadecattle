<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="iconfont arrow-icon">城市&#xe62d;</div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader"
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
.header
    display :flex
    line-height 0.86rem
    background-color :$bgColor
    color :#fff
.header-left
    width :.64rem
    float left
.header-input
    flex:1
    height .64rem
    line-height .64rem
    margin-top .12rem
    margin-left :.2rem
    padding-left :.2rem
    background:#fff
    border-radius :.1rem //5像素
    color :#ccc
.header-right
    width :1.24rem
    float :right
    text-align: center
.back-icon
    text-align:center
    font-size :.4rem
.arrow-icon
    padding .0.2rem
    font-size :.27rem
</style>
