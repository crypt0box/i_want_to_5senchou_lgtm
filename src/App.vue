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
