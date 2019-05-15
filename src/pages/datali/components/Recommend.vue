<template>
  <div>
    <div class="recommendhead">
      <span class="recommendiocd"></span>
      旅牛推荐
    </div>
    <div
      class="recommendbody"
      v-for="(item, index) of Recommendtous"
      :key="index"
    >
      <div class="recommendhe">
        <h6>{{ item.recommtou }}</h6>
        <span>
          <ul>
            <img
              src="https://img1.qunarzz.com/piao/fusion/1804/94/3537f6969acc0c02.png"
            />
            {{
              item.recommsm
            }}
          </ul>
          <ul class="recommendxq">
            <span>{{ item.recommspcna }}</span>
            <span>{{ item.recommspcnb }}</span>
            <span>{{ item.recommspcnc }}</span>
          </ul>
        </span>
      </div>
      <div class="bodybuttem">
        <span>{{ item.recommcha }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props: {
    Recommendtous: Array
  }
};
</script>

<style lang="stylus" scoped>
.recommendhead {
    background-color :#fff
    font-size :0.32rem
    padding :0.1rem
}
.recommendiocd{
    display: inline-block;
    width: 0.38rem;
    height: .38rem;
    position :relative
    left 0.2rem;
    top 0.08rem;
    background :url("http://s.qunarzz.com/piao/image/touch/sight/detail.png")
    background-repeat :no-repeat
    background-size: .4rem 3.3rem;
    margin-right: .1rem;
}
.recommendbody{
    display :flex
    line-height :0.7rem
    border-bottom  :1px solid #F2F2F2
}
.recommendhe{
    width :6rem;
    padding-left :.2rem
}
.recommendhe img{
    width :8%
    height :8%
}
.bodybuttem{
    width :2.5rem;
    text-align :center
}
.bodybuttem span{
    position :relative
    color :#fff
    font-size :0.3rem
    top:1rem
    padding :0.2rem 0.5rem
    background-color :#ffab1e
    border-radius: 0.2rem;
}
.recommendxq span{
    font-size :0.2rem
    color :#00bcd4
    line-height :0.4rem
    margin-left :0.3rem

}
</style>
