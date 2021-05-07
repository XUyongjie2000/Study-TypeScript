<template>
  <div id="box" class="all">
    <div class="ad">
      <ul id="imgs">
        <li><img :src="'./images/0' + currentIndex + '.jpg'" /></li>
      </ul>
    </div>
    <!--相框-->
    <div id="focusD">
      <span id="left" @click="handlePrev" v-show="currentIndex > 1">&lt;</span>
      <span id="right" @click="handleNext" v-show="currentIndex < 5">&gt;</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    //点击右箭头图片进行下一张切换 点击左箭头图片进行上一张切换
    //定义一个变量来表示索引
    const currentIndex = ref<number>(1);
    //定义两个变量 分别代表左箭头（isLeft）右箭头（isRight）
    //给右箭头绑定一个事件 让索引增加
    const handleNext = () => {
      currentIndex.value++;
      //给图片绑定地址
      //   console.log(currentIndex.value);
    };
    //点击左箭头 图片切换上一张
    const handlePrev = () => {
      currentIndex.value--;
    };
    return {
      handleNext,
      currentIndex,
      handlePrev,
    };
  },
});
</script>

<style>
body,
ul,
ol,
li,
img {
  margin: 0;
  padding: 0;
  list-style: none;
}

#box {
  width: 520px;
  height: 280px;
  padding: 5px;
  position: relative;
  border: 1px solid #ccc;
  margin: 100px auto 0;
}

.ad {
  width: 520px;
  height: 280px;
  overflow: hidden;
  position: relative;
}

#box img {
  width: 520px;
}

.ad ol {
  position: absolute;
  right: 10px;
  bottom: 10px;
}

.ad ol li {
  width: 20px;
  height: 20px;
  line-height: 20px;
  border: 1px solid #ccc;
  text-align: center;
  background: #fff;
  float: left;
  margin-right: 10px;
  cursor: pointer;
  _display: inline;
}

.ad ol li.current {
  background: yellow;
}

.ad ul li {
  float: left;
}

.ad ul {
  position: absolute;
  top: 0;
  width: 2940px;
}

.ad ul li.current {
  display: block;
}

#focusD span {
  width: 40px;
  height: 40px;
  position: absolute;
  left: 5px;
  top: 50%;
  margin-top: -20px;
  background: #000;
  cursor: pointer;
  line-height: 40px;
  text-align: center;
  font-weight: bold;
  font-family: "黑体";
  font-size: 30px;
  color: #fff;
  opacity: 0.3;
  border: 1px solid #fff;
}

#focusD #right {
  right: 5px;
  left: auto;
}
</style>
