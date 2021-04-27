<template>
  <!-- 列表 -->
  <div>
    <div class="item" v-for="item in productList" :key="item.id">
      <img :src="item.img" />
      <div class="name">{{ item.name }}</div>
      <div class="change">
        <a href="" @click.prevent="handleSubProduct(item.id)">－</a>
        <input type="text" class="num" :value="item.num" />
        <a href="" @click.prevent="handleAddProduct(item.id)">＋</a>
      </div>
      <div class="del" @click="handleDeleteProduct(item.id)">×</div>
    </div>
  </div>
</template>

<script lang="ts">
//0. 要把script标签中添加一个lang属性 值为ts
//1. 引入vue 使用vue中定义组件的方法 defineComponent
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    productList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    //删除商品
    handleDeleteProduct(id: number) {
      //$emit(自定义事件名，传给父组件的数据)
      this.$emit("del", id);
    },
    //添加商品数量
    handleAddProduct(id: number): void {
      this.$emit("add", id);
    },
    //添加商品数量
    handleSubProduct(id: number): void {
      this.$emit("sub", id);
    },
  },
});
</script>

<style></style>
