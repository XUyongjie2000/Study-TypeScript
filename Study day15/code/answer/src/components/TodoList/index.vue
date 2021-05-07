<template>
  <div id="app" class="main">
    <h2>小目标列表</h2>
    <div class="list">
      <h3>添加小目标</h3>
      <input
        type="text"
        class="text-keyword"
        placeholder="输入小目标后，按回车确认"
        v-model="taskname"
        @keyup.enter="handlerAddTask"
      />
      <p>
        共有{{ TaskList.length }}个目标，已完成{{
          TaskList.length - unFinish
        }}，还有{{ unFinish }}条未完成
      </p>
    </div>
    <ul>
      <li
        class="li1"
        v-for="(item, index) in TaskList"
        :key="item.id"
        :data-index="index"
      >
        <div>
          <span
            :class="['type-span', item.status ? 'status-end' : '']"
            @click="changeStatus(index)"
          ></span>
          <span>{{ item.name }}</span>
          <span class="close" @click="deleteTask(index)">X</span>
        </div>
      </li>
      <li class="li1">
        <div>
          <!-- <span class="type-span"></span>
          <span>css3</span>
          <span class="close">X</span> -->
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from "vue";

export default defineComponent({
  setup() {
    //在表单中输入内容 按回车键添加目标 并且在下面展示出来 需要对表单做非空校验
    //任务的数据结构定义出来 渲染结构
    type taskType = {
      id: number;
      name: string;
      status: boolean;
    };
    const TaskList: Array<taskType> = reactive([
      { id: 0, name: "今天我们出去玩", status: false },
    ]);
    //定义一个数据变量  获取输入框的值（双向绑定）
    const taskname = ref<string>("");
    //给input添加键盘事件中的案件排名，给键盘事件绑定函数
    const handlerAddTask = () => {
      console.log(taskname.value);
      //获取input中的值 判断值是否为空
      if (taskname.value.trim().length == 0) return alert("不能为空");
      //组织数据的格式  添加数据
      const task: taskType = {
        id: TaskList.length,
        name: taskname.value,
        status: false,
      };
      taskname.value = "";
      TaskList.push(task);
    };

    //随着下面列表的数量不断的改变 目标总数个数也在不断地改变
    // 声明一个未完成值得变量（计算属性）
    const unFinish = computed(() => {
      return TaskList.filter((item) => !item.status).length;
    });

    //当点击每一项前面的复选框的时候 目标就表示完成 上面已完成和未完成中间的数量也在不断地变化
    //给复选框添加点击事件 把索引作为参数
    const changeStatus = (index) => {
      //通过索引来获取到某一个对象 把状态取反
      TaskList[index].status = !TaskList[index].status;
    };

    //鼠标移动到每一项上面 点击删除当前的这一项就会被删除 上面已完成和未完成的中间的数量跟当前的的这一项是否选中有关
    //给每个x号添加点击事件
    const deleteTask = (index) => {
      //把index当作参数返回
      //通过索引找到对象 把对象删除
      TaskList.splice(index, 1);
    };  

    return {
      TaskList,
      taskname,
      handlerAddTask,
      unFinish,
      changeStatus,
      deleteTask,
    };
  },
});
</script>

<style>
body {
  font-family: "微软雅黑";
  font-size: 14px;
}
input {
  font-size: 14px;
}
body,
ul,
div,
html {
  padding: 0;
  margin: 0;
}
.hidden {
  display: none;
}
.main {
  width: 800px;
  margin: 0 auto;
}
li {
  list-style-type: none;
  line-height: 40px;
  position: relative;
  border: 1px solid transparent;
  padding: 0 20px;
}
li .type-span {
  display: block;
  width: 10px;
  height: 10px;
  background: #ccc;
  margin: 14px 10px 0 0;
  float: left;
}
span.status-end {
  background: #09f;
}
li .close {
  position: absolute;
  color: #f00;
  font-size: 20px;
  line-height: 40px;
  height: 40px;
  right: 20px;
  cursor: pointer;
  display: none;
  top: 0;
}
li:hover {
  border: 1px solid #09f;
}
li:hover .close {
  display: block;
}
li .text-keyword {
  height: 40px;
  padding-left: 10px;
  box-sizing: border-box;
  margin-left: 10px;
  width: 80%;
  display: none;
}
.text-keyword {
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding-left: 10px;
  outline: none;
}
</style>
