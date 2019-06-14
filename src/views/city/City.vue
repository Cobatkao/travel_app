<template>
  <div id="wrapper">
    <city-header></city-header>
  </div>
</template>

<script>
import CityHeader from "./components/Header.vue";

export default {
  name: "City",
  components: {
    CityHeader
  }
};
</script>

<style scoped lang="stylus">
#wrapper {
  color: blue;
}
</style>
