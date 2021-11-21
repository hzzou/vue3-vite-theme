import firstView from "@/views/first/index.vue";
import secondView from "@/views/second/index.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

let routes: Array<RouteRecordRaw> = [
  {
    path: '/first',
    name: 'firstView',
    component: firstView
  },
  {
    path: '/second',
    name: 'secondView',
    component: secondView
  },
  {
    path: '/:pathMatch(.*)',
    redirect: 'first'
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;