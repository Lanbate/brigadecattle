<template>
  <div>
    <div class="recommednt-title">热销推荐</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
    <a class="item-bootm">
      查看更多
    </a>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "https://dimg03.c-ctrip.com/images/fd/hotel/g4/M08/6C/DE/CggYHFY6qrqAGreOAA0uQi3yjhc732_C_210_210.jpg",
          title: "千岛湖绿城度假村",
          desc:
            "限量抢购！千岛湖绿城度假酒店+自助早餐+部分房型含高铁接站/鱼头券，可加购森林氧吧/中心湖区门票【一线湖景】"
        },
        {
          id: "0002",
          imgUrl:
            "https://dimg05.c-ctrip.com/images/100k0w000000kdwrkDD05_C_510_300.jpg",
          title: "天目湖",
          desc:
            "天目湖的周围，现存许多历史文化遗址：以春秋时代楚人伍子胥名“员”命名的伍员山，东汉大文学家蔡邕读书台，太白楼，报恩禅寺，唐代名刹龙兴寺旧址，“天下第一石拱坝”等。 天目湖地区物产丰富，有“沙河桂茗”绿茶、“乌龙茶”、“珍珠栗”、“桂元栗”、“砂锅鱼头”等"
        },
        {
          id: "0003",
          imgUrl:
            "https://youimg1.c-ctrip.com/target/100u0j000000aezmrF549_C_326_210.jpg",
          title: "黄浦江游览（十六铺码头）",
          desc: "从拥有百余年历史的著名码头出发。"
        },
        {
          id: "0004",
          imgUrl:
            "https://dimg02.c-ctrip.com/images/fd/tg/g2/M02/12/83/Cghzf1U0WAGAAT1TAAa-tvGTE54572_C_326_210.jpg",
          title: "世纪公园",
          desc: "树木花草众多，休闲漫步的好去处。"
        }
      ]
    };
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
