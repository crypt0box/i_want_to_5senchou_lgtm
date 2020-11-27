<template>
  <div>
    <div v-for="(article, index) in articleList" :key="article.index">
      <div class="article-box">
        <div class="button-container">
          <span class="button-count">{{ article.node.likesCount + plusCount[index] }}</span>
            <div class="button-content">
            <a 
              href="#"
              class="LGTM-button"
              type="button"
              @click="increment(index)"
              >
              <span class="LGTM-button-moji">LG<br>TM</span>
            </a>
          </div>
        </div>
        <img class="article-box-img" :src="article.node.author.profileImageUrl" alt="logo">
        <div class="article-box-content">
          <a class="article-title" :href="article.node.linkUrl">{{ article.node.title }}</a>
          <div class="article-details">
            <div class="article-details-author">
              <span>by {{ article.node.author.urlName }}</span>
              <span> 1 day ago</span>
              <span :class="{ colored_lgtm: plusCount[index] }" class="lgtm">LGTM</span>
              <span class="likes-count">{{ article.node.likesCount + plusCount[index] }}</span>
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

export type DataType = {
  articleList: Array<any>;
  lgtmCount: number;
  plusCount: number[];
}

export default Vue.extend({
  name: 'DisplayQiitaTrend',
  data(): DataType {
    return {
      articleList: [],
      lgtmCount: 0,
      plusCount: new Array(30).fill(0),
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
    increment(index: number) {
      this.$set(this.plusCount, index, this.plusCount[index] + 1)
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
.button-container {
  display: grid;
  grid-template-rows: 25px 50px;
  grid-template-columns: 50px;
}
.button-count {
  grid-row: 1 / 2;
  color: rgb(60, 207, 60);
  font-weight: bold;
  text-align: center;
}
.button-content {
  grid-row: 2 / 3;
}
.LGTM-button {
  display: inline-block;
  text-decoration: none;
  color: rgb(60, 207, 60);
  width: 45px;
  height: 45px;
  line-height: 15px;
  border-radius: 50%;
  border: solid 2px rgb(60, 207, 60);
  overflow: hidden;
  font-weight: bold;
  text-align: center;
  box-shadow: inset 0 2px 0 rgba(255,255,255,0.5), 0 2px 2px rgba(0, 0, 0, 0.19);
}
.LGTM-button:active {
  background: rgb(60, 207, 60);
}
.LGTM-button-moji {
  vertical-align: sub;
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
  text-decoration: none;
  color: black;
}
.article-details {
  color: gray;
}
.lgtm {
  font-weight: bold;
  margin-left: 5px;
}
.colored_lgtm {
  color: rgb(60, 207, 60);
}
.likes-count {
  margin-left: 5px;
}
</style>
