<template>
  <div class="calcprice">
    <h2>计算总价：{{ sumPrice }}元</h2>
    <ul>
      <!-- 一般不能使用index作为key -->
      <li
        v-for="(item, index) in fruitList"
        :key="index"
        @click="handlerSelected(index)"
        :class="{ active: item.status }"
      >
        {{ item.name + "(" + item.price + "&yen;)" }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  //就是vue组件的入口函数
  setup() {
    //功能一：根据截图自己定义json数据 之后进行数据渲染
    //1.根据图片进行json数据定义 数据是一个数组[对象{name，price，status}] 数据类型
    type fruitType = {
      name: string;
      price: number;
      status: boolean;
    };
    const fruitList: Array<fruitType> = reactive([
      {
        name: "苹果",
        price: 10,
        status: false,
      },
      {
        name: "梨子",
        price: 15,
        status: false,
      },
      {
        name: "樱桃",
        price: 20,
        status: false,
      },
      {
        name: "西瓜",
        price: 25,
        status: false,
      },
    ]);
    //2.书写template模板
    //3.渲染数据

    //功能二：鼠标点击每一行会给当前行添加背景颜色 并且总价也会增加
    //2.2.1 声明总价
    const sumPrice = ref<number>(0);
    //2.1鼠标点击每一行 给当前行添加背景颜色
    //2.1.2给li添加点击事件 把该li的索引作为参数返回
    const handlerSelected = (index) => {
      //2.1.3把每个水果的status的状态取反操作
      fruitList[index].status = !fruitList[index].status;
      //2.1.4 获取每个水果的status 如果为true 添加active类名
      //2.2累加总价

      if (fruitList[index].status) {
        //2.2.2 找出如果水果的状态为true 就进行累加
        sumPrice.value += fruitList[index].price;
      } else {
        //2.2.3 如果水果的状态为false 就进行相减
        sumPrice.value -= fruitList[index].price;
      }
    };

    return {
      fruitList,
      handlerSelected,
      sumPrice,
    };
  },
});
</script>

<style>
.calcprice {
  width: 200px;
  border: 1px solid #ccc;
}
ul {
  width: 100%;
  margin: 0;
  padding: 0;
  border: 1px solid #ccc;
}
li {
  width: 100%;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}
li.active {
  background-color: red;
}
</style>
