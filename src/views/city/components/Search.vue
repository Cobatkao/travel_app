<template>
  <div class="search">
    <label>
      <input
        type="search"
        class="search-input"
        placeholder="输入城市名或拼音"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "CitySearch"
};
</script>

<style scoped lang="stylus">
@import "~@s/varibles.styl";

.search
  height .72rem
  background $bgColor
  padding 0 .1rem
  .search-input
    box-sizing border-box
    padding 0 .44rem
    height .62rem
    line-height .62rem
    width 100%
    text-align center
    border-radius .1rem
</style>
