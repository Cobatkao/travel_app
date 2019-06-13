<template>
  <div id="wrapper">
    <swiper v-if="showSwiper" :options="swiperOption" ref="swiperOption">
      <swiper-slide v-for="(item, idx) of swiperList" :key="item.id">
        <img class="swiper_img" :src="item.imgUrl" :alt="idx" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    swiperList: {
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
        slidesperView: 1,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
          //stopOnLastSlide: false
        },
        loop: true
      }
    };
  },
  computed: {
    showSwiper() {
      return this.swiperList.length;
    }
  }
};
</script>

<style scoped lang="stylus">
#wrapper >>> .swiper-pagination-bullet-active {
  background: #ffffff !important;
}
#wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 26.67%;
  overflow: hidden;
  background: #cacaca;
  .swiper_img {
    max-width: 100%;
  }
}
</style>
