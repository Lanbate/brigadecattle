<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
            <p class="icon-text">{{ item.desc }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// import { parse } from "path";
// import { constants } from "crypto";
export default {
  name: "HomeIcons",
  data() {
    return {
      inconList: [
        {
          id: "0001",
          imgUrl:
            "https://pic.c-ctrip.com/VacationH5Pic/group_travel/index/v2_zby_14.png",
          desc: "热门景区"
        },
        {
          id: "0002",
          imgUrl:
            "https://pic.c-ctrip.com/VacationH5Pic/group_travel/index/v2_zby_16.png",
          desc: "高铁游玩"
        },
        {
          id: "0003",
          imgUrl:
            "https://pic.c-ctrip.com/VacationH5Pic/group_travel/index/v2_zby_2.png",
          desc: "周边跟团"
        },
        {
          id: "0004",
          imgUrl:
            "https://pic.c-ctrip.com/VacationH5Pic/group_travel/index/v2_zby_3.png",
          desc: "一日游玩"
        },
        {
          id: "0005",
          imgUrl:
            "https://pic.c-ctrip.com/VacationH5Pic/group_travel/index/v2_zby_4.png?20181031.png",
          desc: "景点门票"
        },
        {
          id: "0006",
          imgUrl:
            "https://pic.c-ctrip.com/VacationH5Pic/group_travel/index/v2_zby_5.png",
          desc: "亲子游玩"
        },
        {
          id: "0007",
          imgUrl:
            "https://pic.c-ctrip.com/VacationH5Pic/group_travel/index/v2_zby_37.png",
          desc: "春游踏春"
        },
        {
          id: "008",
          imgUrl:
            "https://pic.c-ctrip.com/VacationH5Pic/group_travel/index/v2_zby_10.png",
          desc: "3天2玩"
        },
        {
          id: "009",
          imgUrl:
            "https://pic.c-ctrip.com/VacationH5Pic/group_travel/index/v2_zby_7.png",
          desc: "温泉度假"
        },
        {
          id: "010",
          imgUrl:
            "https://pic.c-ctrip.com/VacationH5Pic/group_travel/index/v2_zby_14.png",
          desc: "古镇古村"
        },
        {
          id: "011",
          imgUrl:
            "https://pic.c-ctrip.com/VacationH5Pic/group_travel/index/v2_zby_8.png?20181031.png",
          desc: "高星自助"
        },
        {
          id: "012",
          imgUrl:
            "https://pic.c-ctrip.com/VacationH5Pic/group_travel/index/v2_zby_47.png?20190312.png",
          desc: "户外赏花"
        },
        {
          id: "013",
          imgUrl:
            "https://pic.c-ctrip.com/VacationH5Pic/group_travel/index/v2_zby_12.png",
          desc: "度假酒店"
        },
        {
          id: "014",
          imgUrl:
            "https://pic.c-ctrip.com/VacationH5Pic/group_travel/index/v2_zby_26.png",
          desc: "精品客栈"
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.inconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
@import '~@/assets/styles/mixins.styl';

.icons >>> .swiper-container {
  width: 100%;
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
  margin-top: -0.06rem;
}
.icons{
  margin-top 0.2rem
}

.icon {
  position: relative;
  overflow: hidden;
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
}

.icon-img {
  position: absolute;
  top: 0;
  left: 0;
  resize: 0;
  bottom: 0.44rem;
  box-sizing: border-box;
  padding: 0.1rem;
}

.icon-img-content {
  display: block;
  margin-left: 0.2rem;
  height: 100%;
}

.icon-text {
  text-align: center;
  margin-left: 10%;
  font-size: 13px;
  color: $darktextcolor;
  ellipsis()
}
</style>
