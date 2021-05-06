//RouteRecordRaw 为了规定 路由的规则
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

//直接导入
import CalcPrice from "../components/CalcPrice/index.vue"
import Slide from "../components/Slide/index.vue"
const routes: Array<RouteRecordRaw> = [
    {
        path: "/calcPrice",
        component: CalcPrice
    },
    {
        path: "/slide",
        component: Slide
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router