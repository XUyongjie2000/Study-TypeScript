##### 一 引包

npm init @vitejs/app

npm install vue-router@4

######二 创建slide文件夹 在index.vue中编辑

```ts
<template>
  <div>
    <h2>简易轮播图</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style></style>

```



###### 三 创建routes文件夹 在index.ts中编辑

```ts
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

//导入
import Slide from "../components/Slide/index.vue"
//懒加载
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: Slide
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: []
})

export default router


//在main.ts中引用router
import { createApp } from 'vue'
import router from "./routes"
import App from './App.vue'

createApp(App).use(router).mount('#app')
```

###### 四 在App.vue中编辑

```ts
  <div>
    <router-link to="/slide">简易轮播图</router-link>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <hr />

    <router-view></router-view>
  </div>
```

###### 五 在main.ts中编辑

```ts
import { createApp } from 'vue'
import router from "./routes"
import App from './App.vue'

createApp(App).use(router).mount('#app')
```

###### 六 引入html和css文件 图片文件

###### 七 点击右箭头图片下一张切换

   *//点击右箭头图片进行下一张切换 点击左箭头图片进行上一张切换*

   *//定义一个变量来表示索引*

   *//给右箭头绑定一个事件 让索引增加*

   *//给图片绑定地址*

```ts
//绑定click
<span id="right" @click="handleNext">&gt;</span>



setup() {
    //点击右箭头图片进行下一张切换 点击左箭头图片进行上一张切换
    //定义一个变量来表示索引
    const currentIndex = ref<number>(1);
    //给右箭头绑定一个事件 让索引增加
    const handleNext = () => {
      currentIndex.value++;
      //给图片绑定地址
      console.log(currentIndex.value);//123456
    };

    return {
      handleNext,
      currentIndex,
    };
  },
      
//绑定图片地址
<li><img :src="'./images/0' + currentIndex + '.jpg'" /></li>
把image文件赋值到public中

//点击左箭头 图片切换上一张
const handlePrev = () => {
currentIndex.value--;
};
<span id="left" @click="handlePrev">&lt;</span>
```

###### 八 左右按钮的显示和隐藏

```ts
//绑定v-show
<span id="left" @click="handlePrev" v-show="currentIndex > 1">&lt;</span>
<span id="right" @click="handleNext" v-show="currentIndex < 5">&gt;</span>
```

