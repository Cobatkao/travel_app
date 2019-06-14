<template>
  <div id="wrapper">
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script>
import CityHeader from "./components/Header.vue";
import CitySearch from "./components/Search.vue";

export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch
  }
};
</script>

<style scoped lang="stylus">
#wrapper {
  color: blue;
}
</style>
