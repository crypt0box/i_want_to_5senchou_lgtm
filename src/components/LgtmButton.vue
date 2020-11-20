<template>
  <div>
    <div>
      <a 
        href="#"
        class="LGTM-button"
        type="button"
        @click="isClicked = !isClicked"
        >
        <span class="LGTM-button-moji">LG<br>TM</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LgtmButton',
  data() {
    return {
      isClicked: false,
    }
  },
});
</script>

<style scoped lang="scss">
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