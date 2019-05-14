<template>
  <div class="loading">
    <span class="loads">正在加载.....</span>
  </div>
</template>

<script>
export default {
  name: "Loading" // 定义的组件名称 使用时写法：loading
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
    position: absolute;
    left:43%;
    top: 50%;
    font-weight:bold
}
</style>
