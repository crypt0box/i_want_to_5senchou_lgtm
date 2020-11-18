<template>
  <display-qiita-trend></display-qiita-trend>
</template>

<script lang="ts">
import Vue from 'vue';
import DisplayQiitaTrend from './components/DisplayQiitaTrend.vue';

export default Vue.extend({
  name: 'App',
  components: {
    DisplayQiitaTrend,
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
