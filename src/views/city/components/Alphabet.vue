<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letterArr"
      :key="item"
      @click="JumpToAlphabet"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      :ref="item"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: ["cities"],
  data() {
    return {
      touchStatus: false,
      topY: 0,
      timer: null
    };
  },
  // 当页面数据发生变化，且完成重新渲染后执行
  updated() {
    this.topY = this.$refs["A"][0].offsetTop;
  },
  computed: {
    letterArr() {
      const letterArr = [];
      for (let i in this.cities) {
        if (this.cities.hasOwnProperty(i)) {
          letterArr.push(i);
        }
      }
      return letterArr;
    }
  },
  methods: {
    JumpToAlphabet(e) {
      this.bus.$emit("change", e.currentTarget.innerHTML);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79;
          const idx = Math.floor((touchY - this.topY) / 16);
          if (idx >= 0 && idx < this.letterArr.length) {
            console.log(idx);
            this.bus.$emit("change", this.letterArr[idx]);
          }
        }, 16);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  }
};
</script>

<style scoped lang="stylus">
@import "~@s/varibles.styl";

.list
  position absolute
  top 1.58rem
  right 0
  bottom 0
  width .4rem
  display flex
  flex-direction column
  justify-content center
  align-items center
  .item
    line-height .32rem
    color $bgColor
    font-size .24rem
    font-weight bold
</style>
