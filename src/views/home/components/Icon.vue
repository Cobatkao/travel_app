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
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        slidesperView: 1
      },
      iconList: [
        {
          id: "001",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票景点门票景点门票景点门票景点门票"
        },
        {
          id: "002",
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/f0f00d6dfe038c044dbc9a437f58b0eb.png",
          desc: "一日游"
        },
        {
          id: "003",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          desc: "北京必游"
        },
        {
          id: "004",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png",
          desc: "水上乐园"
        },
        {
          id: "005",
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png",
          desc: "爬长城"
        },
        {
          id: "006",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png",
          desc: "故宫"
        },
        {
          id: "007",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
          desc: "动植物园"
        },
        {
          id: "008",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1805/3a/754b47f658e9c602.png",
          desc: "怀北漂流"
        },
        {
          id: "009",
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b4511345827006994aa1980a3886f0ac.png",
          desc: "北京世园会"
        },
        {
          id: "010",
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png",
          desc: "北京欢乐谷"
        }
      ]
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
