<template>
  <div>
    <div class="button-container">
      <span class="button-count">{{ lgtmCount + plusCount }}</span>
        <div class="button-content">
        <a 
          href="#"
          class="LGTM-button"
          type="button"
          @click="increment"
          >
          <span class="LGTM-button-moji">LG<br>TM</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LgtmButton',
  props: ['lgtmCount'],
  data() {
    return {
      plusCount: 0,
    }
  },
  methods: {
    increment() {
      this.plusCount += 1;
      this.$emit('plusCount', this.plusCount);
    }
  }
});
</script>

<style scoped lang="scss">
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
</style>