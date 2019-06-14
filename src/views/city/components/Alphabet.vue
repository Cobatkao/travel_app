<template>
  <ul class="list">
    <li class="item" v-for="(item, key) of cities" :key="key">{{ key }}</li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: ["cities"]
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
    line-height .32rem
    color $bgColor
    font-size .24rem
    font-weight bold
</style>
