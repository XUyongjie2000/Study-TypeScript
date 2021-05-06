<template>
  <div>
    <router-link to="/calcprice">计算总价</router-link>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/slide">简易轮播图</router-link>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
