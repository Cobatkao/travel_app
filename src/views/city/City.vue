<template>
  <div id="wrapper">
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hot="hotCities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from "./components/Header.vue";
import CitySearch from "./components/Search.vue";
import CityList from "./components/List.vue";
import CityAlphabet from "./components/Alphabet.vue";

import $http from "axios";

export default {
  name: "City",
  data() {
    return {
      cities: null,
      hotCities: null
    };
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    getCityInfo() {
      $http.get("/api/city").then(data => {
        let res = data.data.data;
        if (res.ret && res.data) {
          let data = res.data;
          this.cities = data.cities;
          this.hotCities = data.hotCities;
        }
      });
    }
  },
  mounted() {
    this.getCityInfo();
  }
};
</script>

<style scoped lang="stylus"></style>
