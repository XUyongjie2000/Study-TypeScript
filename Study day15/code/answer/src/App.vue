<template>
  <div>
    <router-link to="/slide">图片切换</router-link>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/todolist">小目标列表</router-link>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/message">留言板</router-link>
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
