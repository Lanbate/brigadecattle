<template>
  <div>
    <detali-banner></detali-banner>
    <detali-header></detali-header>
    <detali-list :list="list"></detali-list>
    <div class="content"></div>
  </div>
</template>

<script>
import DetaliBanner from "./components/Banner";
import DetaliHeader from "./components/Header";
import DetaliList from "./components/list";
export default {
  name: "Datali",
  components: {
    DetaliBanner,
    DetaliHeader,
    DetaliList
  },
  data() {
    return {
      list: [
        {
          title: "成人票",
          children: [
            {
              title: "成人三馆联票",
              children: [
                {
                  title: "成人联票"
                }
              ]
            },
            {
              title: "成人五馆联票"
            }
          ]
        },
        {
          title: "学生票"
        },
        {
          title: "儿童票"
        },
        {
          title: "特惠票"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.content{
  height :50rem
}
</style>
