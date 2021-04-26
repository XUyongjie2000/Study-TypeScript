<template>
  <div class="container">
    <div class="cart">
      <CartTitle :user-name="userName"></CartTitle>
      <CartList
        :product-list="productList"
        @del="deleteProducr"
        @add="addproduct"
        @sub="subproduct"
      ></CartList>
      <CartTotal :product-list="productList"></CartTotal>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
//导入 购物车 title组件
import CartTitle from "./components/CartTitle/index.vue";
//导入 购物车Total组件
import CartTotal from "./components/CartTotal/index.vue";
//导入 购物车List组件
import CartList from "./components/CartList/index.vue";
import "./types/cc";
export default defineComponent({
  name: "App",
  data() {
    return {
      //定义数据

      //1.用户名
      userName: "张三",
      //2.商品列表
      productList: [
        {
          id: 1,
          name: "TCL彩电",
          price: 1000,
          num: 1,
          img: "img/a.jpg",
        },
        {
          id: 2,
          name: "机顶盒",
          price: 1000,
          num: 1,
          img: "img/b.jpg",
        },
        {
          id: 3,
          name: "海尔冰箱",
          price: 1000,
          num: 1,
          img: "img/c.jpg",
        },
        {
          id: 4,
          name: "小米手机",
          price: 1000,
          num: 1,
          img: "img/d.jpg",
        },
        {
          id: 5,
          name: "PPTV电视",
          price: 1000,
          num: 2,
          img: "img/e.jpg",
        },
      ],
    };
  },
  methods: {
    deleteProducr(id: number): void {
      // console.log(id);
      //1. 通过findIndex找到id对应的对象的索引
      let index = this.productList.findIndex((item) => item.id == id);
      console.log(index);

      //2. 通过索引删除那个对象
      this.productList.splice(index, 1);
    },
    addproduct(id: number): void {
      this.productList.some((item: productItem) => {
        if (item.id == id) {
          item.num++;
          //怕出现负数 所以重置为0
          item.num = item.num < 0 ? 0 : item.num;
          return true;
        }
      });
    },
    subproduct(id: number): void {
      this.productList.some((item: productItem) => {
        if (item.id == id) {
          item.num--;
          //怕出现负数 所以重置为0
          item.num = item.num < 0 ? 0 : item.num;
          return true;
        }
      });
    },
  },
  components: {
    CartTitle,
    CartTotal,
    CartList,
  },
});
</script>

<style>
#app {
  /*为了防止 字体在手机中 出现毛刺*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container .cart {
  width: 300px;
  /*background-color: lightgreen;*/
  margin: auto;
}

.container .title {
  background-color: lightblue;
  height: 40px;
  line-height: 40px;
  text-align: center;
  /*color: #fff;*/
}

.container .total {
  background-color: #ffce46;
  height: 50px;
  line-height: 50px;
  text-align: right;
}

.container .total button {
  margin: 0 10px;
  background-color: #dc4c40;
  height: 35px;
  width: 80px;
  border: 0;
}

.container .total span {
  color: red;
  font-weight: bold;
}

.container .item {
  height: 55px;
  line-height: 55px;
  position: relative;
  border-top: 1px solid #add8e6;
}

.container .item img {
  width: 45px;
  height: 45px;
  margin: 5px;
}

.container .item .name {
  position: absolute;
  width: 90px;
  top: 0;
  left: 55px;
  font-size: 16px;
}

.container .item .change {
  width: 100px;
  position: absolute;
  top: 0;
  right: 50px;
}

.container .item .change a {
  font-size: 20px;
  width: 30px;
  text-decoration: none;
  background-color: lightgray;
  vertical-align: middle;
}

.container .item .change .num {
  width: 40px;
  height: 25px;
}

.container .item .del {
  position: absolute;
  top: 0;
  right: 0px;
  width: 40px;
  text-align: center;
  font-size: 40px;
  cursor: pointer;
  color: red;
}

.container .item .del:hover {
  background-color: orange;
}
</style>
