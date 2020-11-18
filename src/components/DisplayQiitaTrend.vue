<template>
  <div>
    <div v-for="article in articleList" :key="article.index">
      {{ article }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

export default Vue.extend({
  name: 'DisplayQiitaTrend',
  data() {
    return {
      articleList: Array,
    }
  },
  created() {
    axios
      .get('https://qiita-api.netlify.app/.netlify/functions/trend')
      .then(response => this.articleList = response.data)
      .catch(error => {
        console.log('httpリクエストにs失敗しました', error)
      });
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
