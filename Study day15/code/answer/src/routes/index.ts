import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

//导入
import Slide from "../components/Slide/index.vue"
import TodoList from "../components/TodoList/index.vue"
//懒加载
const routes: Array<RouteRecordRaw> = [
    {
        path: "/slide",
        component: Slide
    },
    {
        path: "/todolist",
        component: TodoList
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router