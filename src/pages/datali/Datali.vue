<template>
  <div>
    <detali-banner></detali-banner>
    <detali-header></detali-header>
    <div class="content"></div>
  </div>
</template>

<script>
import DetaliBanner from "./components/Banner";
import DetaliHeader from "./components/Header";
export default {
  name: "Datali",
  components: {
    DetaliBanner,
    DetaliHeader
  }
};
</script>

<style lang="stylus" scoped>
.content{
  height :50rem
}
</style>
