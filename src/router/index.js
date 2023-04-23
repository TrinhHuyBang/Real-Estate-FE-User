import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "todolist",
    component: () => import("../components/ToDoList.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/detail/:id",
    name: "taskDetail",
    component: () => import("../components/TaskDetail.vue"),
  },
  {
    path: "/demoApi",
    name: "demoApi",
    component: () => import("../components/DemoApi.vue"),
  },
  {
    path: "/demoModal",
    name: "demoModal",
    component: () => import("../components/DemoModal.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
