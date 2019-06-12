<template>
  <div id="hd_wrapper">
    <div class="header__back_left">
      <span class="iconfont">&#xe682;</span>
    </div>
    <div class="header__search_input">
      <span class="iconfont">&#xe63d;</span>
      <span>输入城市/景点/游玩主题</span>
    </div>
    <div class="header__select_city">
      <span>城市</span>
      <span class="iconfont arrow_down">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader"
};
</script>

<style scoped lang="stylus">
@import "~@s/varibles.styl";

#hd_wrapper {
  height: .86rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $bgColor;
  color: #ffffff;
  .header__search_input {
    display: flex;
    flex: 1;
    height: .64rem;
    line-height: .64rem;
    border-radius: .1rem;
    background: #ffffff;
    margin-left: .1rem;
    color: #cccccc;
    text-align: left;
    span {
      display: inline-block;
      padding-left: .1rem;
    }
  }
  .header__back_left {
    width: .64rem;
    margin-left: .1rem;
  }
  .header__select_city {
    width: 1.24rem;
    .arrow_down {
      font-size: .24rem;
      padding-left: .08rem;
    }
  }
}
</style>
