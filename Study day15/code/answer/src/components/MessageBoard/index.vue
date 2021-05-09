<template>
  <div id="app" class="container">
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
      crossorigin="anonymous"
    />
    <h3>留言板:</h3>
    <div class="form-group" style="max-height: 300px; overflow: auto">
      <div
        class="row list-group-item"
        v-for="item in searchList"
        :key="item.id"
      >
        <div class="col-md-1">{{ item.nickname }}:</div>
        <div class="col-md-5">{{ item.content }}</div>
        <div class="col-md-2">
          {{ item.date.toLocaleString("cn-GB", { hour12: false }) }}
        </div>
        <div class="col-md-4">
          <button
            class="btn btn-danger"
            type="button"
            @click="deleteMsg(item.id)"
          >
            删除
          </button>
          <button
            class="btn btn-info"
            type="button"
            @click="editMessage(item.id)"
          >
            修改
          </button>
        </div>
      </div>
    </div>
    <br /><br /><br />
    <form class="form-horizontal">
      <div class="form-group">
        <label for="search" class="col-sm-1 control-label">搜索</label>
        <div class="col-sm-11">
          <input
            type="text"
            class="form-control"
            id="search"
            v-model="keywords"
            placeholder="搜索留言"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="nikename" class="col-sm-1 control-label">昵称</label>
        <div class="col-sm-11">
          <input
            type="text"
            class="form-control"
            id="nikename"
            placeholder="请输入昵称"
            v-model="nickname"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="content" class="col-sm-1 control-label">内容</label>
        <div class="col-sm-11">
          <textarea
            id="content"
            class="form-control"
            rows="3"
            v-model="content"
          ></textarea>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-success col-sm-1 col-sm-push-9"
        @click="addMessage"
      >
        发表
      </button>
      <button
        type="button"
        class="btn btn-danger col-sm-1 col-sm-push-10"
        @click="clearAll"
      >
        清屏
      </button>
    </form>
    <!-- 修改 -->
    <form class="form-horizontal" v-show="isEdit">
      <input type="hidden" />
      <div class="form-group">
        <label class="col-sm-1 control-label">修改：</label>
        <div class="col-sm-11">
          <textarea
            class="form-control"
            rows="3"
            v-model="editvalue"
          ></textarea>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-success col-sm-1 col-sm-push-11"
        @click="confirmMessage"
      >
        确认修改
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import component from "*.vue";
import { defineComponent, reactive, ref, computed } from "vue";

export default defineComponent({
  setup() {
    //渲染留言板
    //声明数据类型
    type msgType = {
      id: number;
      nickname: string;
      content: string;
      date: Date;
    };
    //声明数据
    const messageList: Array<msgType> = reactive([
      { id: 0, nickname: "张三", content: "我的名字叫张三", date: new Date() },
      { id: 1, nickname: "李四", content: "我的名字叫李四", date: new Date() },
    ]);
    //发表功能 做非空校验 如果昵称和内容有一项目为空 就不能发表
    //注意：日期的格式为年-月=日-小时：分钟
    //定义昵称数据和内容数据
    const nickname = ref<string>("");
    const content = ref<string>("");
    //给发表按钮添加点击事件
    const addMessage = () => {
      //获取数据并且判断
      if (
        nickname.value.trim().length === 0 ||
        content.value.trim().length === 0
      )
        return alert("请填写昵称和内容");
      //把数据组织成要求的结构添加到messageList数组中
      messageList.push({
        id: messageList.length,
        nickname: nickname.value,
        content: content.value,
        date: new Date(),
      });
      //清空昵称和内容数据
      nickname.value = "";
      content.value = "";
    };

    //删除功能：点击删除按钮 删除当前这一条留言
    //给按钮 添加点击事件 把数据id传过来
    const deleteMsg = (id) => {
      const index = messageList.findIndex((item) => item.id == id);
      //通过数组的splice方法 把某个对象切掉
      messageList.splice(index, 1);
    };

    //修改功能：点击修改按钮 出现对应的修改框
    //默认让修改框消失
    const isEdit = ref<boolean>(false);
    const editvalue = ref<string>("");
    const currentId = ref<number>();
    //点击修改按钮的时候 让修改框显示 回显文字
    const editMessage = (id) => {
      messageList.some((item) => {
        if (item.id == id) {
          isEdit.value = true;
          currentId.value = id;
          editvalue.value = item.content;

          return true;
        }
      });
    };
    //点击确认修改按钮  进行非空校验 修改框消失
    const confirmMessage = () => {
      if (editvalue.value.trim().length == 0) return;
      messageList.some((item) => {
        if (item.id == currentId.value) {
          //把修改后的结果覆盖数据中的内容
          item.content = editvalue.value;
          isEdit.value = false;
          return true;
        }
      });
    };
    //清屏功能：点击清屏按钮 所有留言都被删除
    const clearAll = () => {
      messageList.splice(0, messageList.length);
    };
    //搜索功能：点击搜索按钮 匹配对应的数据
    //声明一个计算属性
    const keywords = ref<string>("");
    const searchList = computed(() => {
      //获取搜索关键字
      //用数组的filter方法 item。nickname item.content
      return messageList.filter((item) => {
        //判断item.nickname.includes(搜索关键字)|| item.content.includex(搜索关键字)

        return (
          item.nickname.includes(keywords.value) ||
          item.content.includes(keywords.value)
        );
      });
    });

    return {
      messageList,
      nickname,
      content,
      addMessage,
      deleteMsg,
      clearAll,
      keywords,
      searchList,
      isEdit,
      editMessage,
      editvalue,
      confirmMessage,
      currentId,
    };
  },
});
</script>

<style>
.btn {
  padding: 0 10px;
}
</style>
