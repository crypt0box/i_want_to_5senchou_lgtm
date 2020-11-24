<template>
  <div>
    <div v-for="article in articleList" :key="article.index">
      <div class="article-box">
        <lgtm-button :lgtmCount="article.node.likesCount" @plusCount="setPlusCount"></lgtm-button>
        <img class="article-box-img" :src="article.node.author.profileImageUrl" alt="logo">
        <div class="article-box-content">
          <a class="article-title" :href="article.node.linkUrl">{{ article.node.title }}</a>
          <div class="article-details">
            <div class="article-details-author">
              <span>by {{ article.node.author.urlName }}</span>
              <span class="lgtm">LGTM</span>
              <span class="likes-count">{{ article.node.likesCount + plusCount }}</span>
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
import LgtmButton from './LgtmButton.vue';

export type DataType = {
  articleList: Array<any>;
  lgtmCount: number;
  plusCount: number;
}

export default Vue.extend({
  name: 'DisplayQiitaTrend',
  components: {
    LgtmButton,
  },
  data(): DataType {
    return {
      articleList: [],
      lgtmCount: 0,
      plusCount: 0,
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
  },
  methods: {
    setPlusCount(arg: number) {
      const plusCount = arg;
      this.plusCount = plusCount;
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.article-box {
  display: flex;
  align-items: center;
  padding: 1%;
  border-bottom: solid 3px #f6f6f6;
  margin-left: 20%;
  margin-right: 20%;
}
.article-box-img {
  height: 40px;
  width: 40px;
  margin-left: 2%;
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
