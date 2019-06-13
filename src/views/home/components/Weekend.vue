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
      <li class="item" v-for="item of weekendList" :key="item.id">
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
  props: {
    weekendList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
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
