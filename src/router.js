import { createWebHistory, createRouter } from "vue-router";
import Login from "./views/Login.vue";

const routes = [
  {
    path: "/login",
    component: Login,
  },
  { path: "/:pathMatch(.*)*", redirect: "/login" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;