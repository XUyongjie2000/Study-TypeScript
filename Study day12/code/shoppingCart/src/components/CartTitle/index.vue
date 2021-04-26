<template>
<!-- 模板中根本就不会出现ts ts只针对script标签中的东西 -->
  <div class="title">{{ userName }}的商品</div>
</template>

<script lang="ts">
//0. 要把script标签中添加一个lang属性 值为ts
//1. 引入vue 使用vue中定义组件的方法 defineComponent
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    //这是vue的要求
    userName: {
      type: String,
      required: true,
    },
  },
});
</script>

<style></style>
