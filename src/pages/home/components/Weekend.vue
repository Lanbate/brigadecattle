<template>
  <div>
    <div class="recommednt-title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
    <a class="item-bootm">查看更多</a>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl: "https://dimg04.c-ctrip.com/images/300n11000000r71od4F3F.jpg",
          title: "丽江古城",
          desc:
            "丽江古城有着多彩的地方民族习俗和娱乐活动，纳西古乐、东巴仪式、占卜文化、古镇酒吧以及纳西族火把节等，别具一格。丽江古城体现了中国古代城市建设的成就，是中国民居中具有鲜明特色和风格的类型之一。"
        },
        {
          id: "0002",
          imgUrl:
            "https://dimg07.c-ctrip.com/images/fd/tg/g1/M04/CB/99/CghzflWw7F2ATxCcABtxFWU_LNw686_C_480_375.jpg",
          title: "乌镇",
          desc:
            "乌镇地处位于桐乡市北郊，是一座有着一千三百多年建镇史的古镇。这里有着典型的小桥、流水，还有大片雅致的江南民居建筑，更有着丰富的美食特产和悠闲的生活节奏，是感受江南水乡风情的好去处。"
        },
        {
          id: "0003",
          imgUrl:
            "https://dimg03.c-ctrip.com/images/100i0v000000k04870DDB_C_480_375.jpg",
          title: "西塘风景区",
          desc:
            "西塘是浙江有名的古镇，你可以来这里细细品味慢生活。在茶楼喝茶听戏、乘坐摇橹船看江南古镇柔情多姿、穿行在烟雨长廊和送子来凤桥之间、看古镇居民的宁静生活。西塘也是许多影视剧的取景之地，电影《碟中谍3》中阿汤哥飞奔于廊棚中的那一段场景很多影迷都还历历在目。西塘的夜，更是不能错过的。晚上坐在船上品味西塘夜景，或是在挂满红灯笼的烟雨长廊下走一走，亦或是到西塘东街的酒吧街坐坐。"
        },
        {
          id: "0004",
          imgUrl:
            "https://dimg02.c-ctrip.com/images/fd/tg/g4/M0B/34/6E/CggYHVaeC4aAIRM3ACaBR1BqmAQ802_C_480_375.jpg",
          title: "云澜湾温泉",
          desc:
            "云澜湾的温泉室外汤池区以精致造景、诗意情境为特色，将东方园林景观与西方精神理疗融合，让你在这里泡汤无比舒心。根据不同养生功能，室外温泉区划分为九大特色区六十个汤池。有适合老年人的六合养生区，适合女孩子的琼浆美肤区，也有适合孩子们的童游水乐区，全家人都能在这里享受到乐趣。"
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
  color: #8B8989;
}

.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 33.9%;
}

.item-img {
  width: 100%;
  height :3rem
}

.item-title {
  font-weight: bold;
  line-height: 0.54rem;
  font-size: 0.25rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left :0.2rem
}

.item-desc {
  line-height: 0.4rem;
  color: #ccc;
  font-size: 0.2rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left :0.2rem
}

.item-bootm {
  display: block;
  padding-top: 0.2rem;
  text-align: center;
}
</style>
