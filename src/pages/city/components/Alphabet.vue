<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handeletterClick"
      @touchstart.prevent="touchstartStart"
      @touchmove="touchstartMove"
      @touchend="touchstartEnd"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  },
  data() {
    return {
      touchstatus: false,
      startY: 0,
      timer: null
    };
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    handeletterClick(e) {
      this.$emit("change", e.target.innerText);
    },
    touchstartStart() {
      this.touchstatus = true;
    },
    touchstartMove(e) {
      if (this.touchstatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 89;
          const index = Math.floor(touchY - this.startY) / 20;
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 10);
      }
    },
    touchstartEnd() {
      this.touchstatus = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position:fixed;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  overflow: hidden;
}

.item {
  line-height: 0.4rem;
  text-align: center;
}
</style>
