<template>
  <div>
    <div class="select-box option">
      <select v-model="selected">
        <option>無限LGTMモード</option>
        <option>5000兆LGTMモード</option>
      </select>
    </div>
    <div v-for="(article, index) in articleList" :key="article.index">
      <div class="article-box">
        <div class="button-container">
          <span class="button-count">
            {{ (article.node.likesCount + plusCount[index]) >= 5000000000000000 ? '約5000兆' : article.node.likesCount + plusCount[index]}}
          </span>
            <div class="button-content">
            <a 
              href="#"
              class="LGTM-button"
              type="button"
              @click.prevent="increment(index)"
              >
              <span class="LGTM-button-moji">LG<br>TM</span>
            </a>
          </div>
        </div>
        <img class="article-box-img" :src="article.node.author.profileImageUrl" alt="logo">
        <div class="article-box-content">
          <a class="article-title" 
            :href="article.node.linkUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
          {{ article.node.title }}
          </a>
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
  selected: string;
}

export default Vue.extend({
  name: 'DisplayQiitaTrend',
  data(): DataType {
    return {
      articleList: [],
      lgtmCount: 0,
      plusCount: new Array(30).fill(0),
      selected: '無限LGTMモード',
    }
  },
  created() {
    axios
      .get(process.env.VUE_APP_QIITA_TREND_URL) //qiitaトレンドを取得するAPI-URL
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
      if (this.selected == '無限LGTMモード') {
        this.$set(this.plusCount, index, this.plusCount[index] + 1);
        return;
      }
      if (this.plusCount[index] >= 5000000000000000) {
        return
      }
      this.$set(this.plusCount, index, this.plusCount[index] + 5000000000000000)
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media screen and (min-width: 480px) {
  .select-box {
    overflow: hidden;
    max-width: 40%;
    margin: 2em auto;
    text-align: center;
  }
  .article-box {
    display: flex;
    align-items: center;
    padding: 1%;
    border-bottom: solid 3px #f6f6f6;
    margin-left: 25%;
    margin-right: 25%;
  }
}
.select-box {
  overflow: hidden;
  width: 90%;
  margin: 2em auto;
  text-align: center;
}
.select-box select {
	width: 100%;
	padding-right: 1em;
	cursor: pointer;
	text-indent: 0.01px;
	text-overflow: ellipsis;
	border: none;
	outline: none;
	background: transparent;
	background-image: none;
	box-shadow: none;
	-webkit-appearance: none;
	appearance: none;
}
.select-box select::-ms-expand {
    display: none;
}
.select-box.option {
	position: relative;
	border: 1px solid #bbbbbb;
	border-radius: 2px;
	background: #ffffff;
}
.select-box.option::before {
	position: absolute;
	top: 0.8em;
	right: 0.9em;
	width: 0;
	height: 0;
	padding: 0;
	content: '';
	border-left: 6px solid transparent;
	border-right: 6px solid transparent;
	border-top: 6px solid #666666;
	pointer-events: none;
}
.select-box.option select {
	padding: 8px 38px 8px 8px;
	color: #666666;
}
.article-box {
    display: flex;
    align-items: center;
    padding: 1%;
    border-bottom: solid 3px #f6f6f6;
  }
.button-container {
  display: grid;
  grid-template-rows: 25px 50px;
  grid-template-columns: 100px;
}
.button-count {
  grid-row: 1 / 2;
  color: rgb(60, 207, 60);
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
}
.button-content {
  grid-row: 2 / 3;
  text-align: center;
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
  white-space: nowrap;
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
