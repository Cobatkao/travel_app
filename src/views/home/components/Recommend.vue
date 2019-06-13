<template>
  <div class="wrapper">
    <div class="title">
      <img
        class="title-img"
        src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"
        alt="猜你喜欢"
      />
      <span>猜你喜欢</span>
    </div>
    <ul>
      <li class="item" v-for="item of recommendList" :key="item.id">
        <img :src="item.imgUrl" :alt="item.title" class="item-img" />
        <div class="item-info">
          <div class="item-title">
            {{ item.title }}
          </div>
          <div class="item-desc">
            {{ item.desc }}
          </div>
          <div class="btn">
            <button class="item-btn">查看详情</button>
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
    recommendList: {
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
  display flex
  height 1.9rem
  border-bottom .02rem solid #cccccc
  &:last-child
    border-bottom 0
  .item-img
    width 1.7rem
    height 1.7rem
    padding .1rem
  .item-info
    flex 1
    padding .1rem
    display flex
    flex-direction column
    justify-content left
    min-width 0
    .item-title
      line-height .54rem
      font-size .32rem
      text-align left
      font-weight bold
      textEllipsis()
    .item-desc
      line-height .4rem
      color #cccccc
      text-align left
      font-size .28rem
    .btn
      text-align left
      .item-btn
        display inline-block
        background #ff9300
        padding 0 .14rem
        border-radius .06rem
        font-size .24rem
        color #ffffff
        font-weight bold
</style>
