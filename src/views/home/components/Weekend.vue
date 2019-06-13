<template>
  <div class="wrapper">
    <div class="title">
      <img
        class="title-img"
        src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"
        alt="周末去哪儿"
      />
      <span>周末去哪儿</span>
    </div>
    <ul>
      <li class="item" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" :alt="item.title" class="item-img" />
        </div>
        <div class="item-info">
          <div class="item-title">
            {{ item.title }}
          </div>
          <div class="item-desc">
            {{ item.desc }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  data() {
    return {
      recommendList: [
        {
          id: "001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg",
          title: "京城周末撒欢",
          desc: "在帝都过周末，不仅仅是城中游！"
        },
        {
          id: "002",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg",
          title: "京城溜娃必去",
          desc: "德智体美劳全面发展的亲子日，这些地方该去看看…"
        },
        {
          id: "003",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",
          title: "帝都必打卡",
          desc: "来北京必去的景点非这些地方莫属"
        },
        {
          id: "004",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
          title: "寻找北京的皇城范儿",
          desc: "数百年的宫廷庙宇，至今依旧威严霸气"
        },
        {
          id: "005",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg",
          title: "学生最爱的博物馆",
          desc: "周末干嘛？北京很多博物馆已经免费开放啦"
        }
      ]
    };
  }
};
</script>

<style scoped lang="stylus">
@import "~@s/mixin.styl";

.title
  line-height .94rem
  display flex
  justify-content left
  align-items center
  padding-left .2rem
  .title-img
    width .3rem
    height .3rem
    display inline-block
    margin-right .04rem
    vertical-align text-top
  span
    font-size .32rem
    color #212121
.item
  .item-img-wrapper
    height 0
    overflow hidden
    padding-bottom 33.5%
    background #cccccc
    .item-img
      width 100%
  .item-info
    line-height .45rem
    display flex
    justify-content left
    flex-direction column
    text-align left
    padding .3rem .2rem
    .item-title
      font-weight bold
</style>
