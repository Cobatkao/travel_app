<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list" v-if="this.hot">
          <div class="button-wrapper" v-for="item of hot" :key="item.id">
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area-wrapper" v-if="this.cities">
        <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
          <div class="title border-topbottom">{{ key }}</div>
          <div class="item-list">
            <div
              class="item border-bottom"
              v-for="innerItem of item"
              :key="innerItem.id"
            >
              {{ innerItem.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "CityList",
  data() {
    return {
      letter: ""
    };
  },
  props: ["cities", "hot"],
  watch: {
    letter() {
      if (this.letter && this.cities) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
    this.bus.$on("change", msg => {
      this.letter = msg.trim();
    });
  }
};
</script>

<style scoped lang="stylus">
@import "~@s/varibles.styl";

.list
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  overflow hidden
  .title
    line-height .44rem
    background #eee
    padding-left .2rem
    color #666padding-left
    font-size .26rem
    &.border-topbottom
      &:before
        border-color #ccc
      &:after
        border-color #ccc
  .button-list
    padding .1rem .6rem .1rem .1rem
    overflow hidden
    .button-wrapper
      float left
      width 33.33%
      .button
        margin .1rem
        text-align center
        border .02rem solid #ccc
        padding .1rem 0
        border-radius .1rem
  .item-list
    .item
      line-height .76rem
      color #666
      padding-left .2rem
      text-align left
    .border-bottom
      &:before
        border-color #ccc
</style>
