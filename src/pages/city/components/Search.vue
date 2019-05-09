//搜索
<template>
  <div class="search">
    <input class="search-iput" type="text" placeholder="输入城市名或者拼音" />
  </div>
</template>

<script>
export default {
  name: "CitySearch"
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
</style>
