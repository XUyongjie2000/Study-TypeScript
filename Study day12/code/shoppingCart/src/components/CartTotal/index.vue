<template>
  <div class="total">
    <span>总价:{{ price }}</span>
    <button>结算</button>
  </div>
</template>

<script lang="ts">
//0. 要把script标签中添加一个lang属性 值为ts
//1. 引入vue 使用vue中定义组件的方法 defineComponent
import { computed, defineComponent } from "vue";
import "../../types/cc";

export default defineComponent({
  props: {
    productList: {
      type: Array,
      required: true,
    },
  },
  computed: {
    price() {
      let sum = 0;
      this.productList.forEach((ele: productItem) => {
        sum += ele.num * ele.price;
      });
      return sum;
    },
  },
});
</script>

<style></style>
