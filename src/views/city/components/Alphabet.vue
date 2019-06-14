<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet"
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
    line-height .4rem
    color $bgColor
</style>
