<template>
  <div class="header">
    <router-link to="/">
      <span class="iconfont header-back">&#xe682;</span>
    </router-link>
    <span>城市选择</span>
  </div>
</template>

<script>
export default {
  name: "CityHeader"
};
</script>

<style scoped lang="stylus">
@import "~@s/varibles.styl";

.header
  line-height $headerHeight
  height $headerHeight
  text-align center
  overflow hidden
  color #fff
  background $bgColor
  font-size .32rem
  position relative
  .header-back
    width .64rem
    font-size .58rem
    color #ffffff
    position absolute
    top 0
    left 0
</style>
