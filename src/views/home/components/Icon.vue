<template>
  <div class="icons">
    <swiper v-if="iconList.length > 0" :options="swiperOption">
      <swiper-slide v-for="(perPage, idx) of pages" :key="idx">
        <div class="icon" v-for="item of perPage" :key="item.id">
          <div class="icon-img">
            <img
              class="icon-img-content"
              style="height: 100%"
              :src="item.imgUrl"
              :alt="item.desc"
            />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "Icon",
  props: {
    iconList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        slidesperView: 1
      }
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, idx) => {
        // 展示页码
        const page = Math.floor(idx / 8);
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

<style scoped lang="stylus">
@import "~@s/varibles.styl";
@import "~@s/mixin.styl";

.icons >>> .swiper-container
  height 0
  max-width 100%
  padding-bottom 54%
  & /deep/ .swiper-pagination-bullets
    bottom .10rem
    color red
  .icon
    float left
    width 25%
    height 0
    padding-bottom 25%
    position relative
    .icon-img
      position absolute
      left 0
      right 0
      top 0
      bottom .44rem
      box-sizing border-box
      padding .1rem
    .icon-desc
      position absolute
      left 0
      right 0
      bottom 0
      line-height .44rem
      height .44rem
      color $dartTextColor
      textEllipsis()
</style>
