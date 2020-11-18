<template>
  <div>
    <div v-for="article in articleList" :key="article.index">
      <div class="article-box">
        <img class="article-box-img" :src="article.node.author.profileImageUrl" alt="logo">
        <div class="article-box-content">
          <a class="article-title" :href="article.node.linkUrl">{{ article.node.title }}</a>
          <div class="article-details">
            <div class="article-details-author">
              <span>by {{ article.node.author.urlName }}</span>
              <span class="lgtm">LGTM</span>
              <span class="likes-count">{{ article.node.likesCount }}</span>
            </div>
          </div>
        </div>
      </div>
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
      .then(response => {
        this.articleList = response.data
        console.log(this.articleList)
      })
      .catch(error => {
        console.log('httpリクエストに失敗しました', error)
      });
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.article-box {
  display: flex;
  align-items: center;
  padding: 3%;
  border-bottom: solid 3px #f6f6f6;
}
.article-box-img {
  height: 40px;
  width: 40px;
  background-color: gray;
  border-radius: 25px;
}
.article-box-content {
  padding-left: 3%;
}
.article-title {
  font-weight: bold;
}
.article-details {
  color: gray;
}
.lgtm {
  font-weight: bold;
  margin-left: 5px;
}
.likes-count {
  margin-left: 5px;
}
</style>
