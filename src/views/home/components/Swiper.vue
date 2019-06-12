<template>
  <div id="wrapper">
    <swiper
      v-if="swiperList.length > 1"
      :options="swiperOption"
      ref="swiperOption"
    >
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
      },
      swiperList: [
        {
          id: "001",
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/667757f979fa38b12c4986f9930b6695.jpg_750x200_6cca7add.jpg"
        },
        {
          id: "002",
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg"
        },
        {
          id: "003",
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg"
        },
        {
          id: "004",
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/aef5f8864f5a1167599609307571b2c4.jpg_750x200_db7bedbe.jpg"
        },
        {
          id: "005",
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/472a476c776c6fd962fcfd6fd75521d5.jpg_750x200_298bac66.jpg"
        },
        {
          id: "006",
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/6ab65be3878a5ea365514cf3a8125fd1.jpg_750x200_7b2fe404.jpg"
        }
      ]
    };
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
