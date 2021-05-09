######一 导入 路由

###### 二 引入 HTML  css样式

###### 三 渲染结构

```ts
li标签添加v-for
 <li
   class="li1"
   v-for="(item, index) in TaskList"
   :key="item.id"
   :data-index="index"
 >
<div>
  <span class="type-span"></span>
  <span>{{ item.name }}</span> // 渲染出来
  <span class="close">X</span>
</div>            
//在表单中输入内容 按回车键添加目标 并且在下面展示出来 需要对表单做非空校验
//随着下面列表的数量不断的改变 目标总数个数也在不断地改变
//当点击每一项前面的复选框的时候 目标就表示完成 上面已完成和未完成中间的数量也在不断地变化
//鼠标移动到每一项上面 点击删除当前的这一项就会被删除 上面已完成和未完成的中间的数量跟当前的的这一项是否选中有关
    //任务的数据结构定义出来 渲染结构
    type taskType = {
      id: number;
      name: string;
      status: boolean;
    };
    const TaskList: Array<taskType> = reactive([
      { id: 1, name: "123456789", status: false },
    ]);

    return {
      TaskList,
    };
```

###### 四 双向绑定

```ts
//绑定taskname  keyup点击
<input
        type="text"
        class="text-keyword"
        placeholder="输入小目标后，按回车确认"
        v-model="taskname"
        @keyup.enter="handlerAddTask"
      />
            
            
            
 //定义一个数据变量  获取输入框的值（双向绑定）
    const taskname = ref<string>("");
    //给input添加键盘事件中的案件排名，给键盘事件绑定函数
    const handlerAddTask = () => {
      console.log(taskname.value);
    };

    return {
      TaskList,
      taskname,
      handlerAddTask,
    };
```

###### 五 判断input是否为空

```ts
//if判断不能为空  
const handlerAddTask = () => {
      console.log(taskname.value);
      //获取input中的值 判断值是否为空
      if (taskname.value.trim().length == 0) return alert("不能为空");
    
    //添加
    const task: taskType = {
  id: TaskList.length,
  name: taskname.value,
  status: false,
};
taskname.value = "";
TaskList.push(task);
    };
```

###### 六  //组织数据的格式 添加数据

```ts
const task: taskType = {
  id: TaskList.length,
  name: taskname.value,
  status: false,
};
taskname.value = "";
TaskList.push(task);
```

###### 七目标总数不断变化

```ts
//带入数据
	  <p>
        共有{{ TaskList.length }}个目标，已完成{{
          TaskList.length - unFinish
        }}，还有{{ unFinish }}条未完成
      </p>
//随着下面列表的数量不断的改变 目标总数个数也在不断地改变
    // 声明一个未完成值得变量（计算属性）
const unFinish = computed(() => {
return TaskList.filter((item) => !item.status).length;
 });
//return返回unFinish
   return {
      TaskList,
      taskname,
      handlerAddTask,
      unFinish,
    };
```

###### 八 目标完成

*//当点击每一项前面的复选框的时候 目标就表示完成 上面已完成和未完成中间的数量也在不断地变化*

*//给复选框添加点击事件 把索引作为参数*

 *//通过索引来获取到某一个对象 把状态取反*

```ts
//绑定点击事件
<span class="type-span" @click="changeStatus(index)"></span>



//给复选框添加点击事件 把索引作为参数
const changeStatus = (index) => {
  //通过索引来获取到某一个对象 把状态取反
  TaskList[index].status = !TaskList[index].status;
};


//return点击事件
 return {
      TaskList,
      taskname,
      handlerAddTask,
      unFinish,
      changeStatus,
    };
```

###### 点击事件完成变蓝色

```ts
//span增加三元运算符
<span
  :class="['type-span', item.status ? 'status-end' : '']"
  @click="changeStatus(index)"
></span>

//css
span.status-end {
  background: #09f;
}
```

###### 点击删除

```ts
//绑定点击事件
<span class="close" @click="deleteTask(index)">X</span>

//给每个x号添加点击事件
const deleteTask = (index) => {
  //把index当作参数返回
  //通过索引找到对象 把对象删除
  TaskList.splice(index, 1);
};
//return返回这个值
    return {
      TaskList,
      taskname,
      handlerAddTask,
      unFinish,
      changeStatus,
      deleteTask,
    };
```

