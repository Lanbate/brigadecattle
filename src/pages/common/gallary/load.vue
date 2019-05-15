<template>
  <div class="loading">
    <span class="loads">正在加载.....</span>
  </div>
</template>

<script>
export default {
  name: "Loading"
};
</script>

<style lang="stylus" scoped>
.loading {
  position: fixed;
  left: 0;
  top: 0;
  background: url("~@/assets/styles/lg.blue-longcat-spinner.gif") center center no-repeat #fff;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
}
.loads{
    display:block
    position: absolute;
    left:42%;
    top: 49%;
    font-weight:bold
}
</style>
