import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import JuzView from "../views/JuzView.vue";
import AyatView from "../components/juz/AyatView.vue";
import HurufView from "../components/huruf/HurufView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/juz",
      name: "juz",
      component: JuzView,
    },
    {
      path: "/ayat/:id",
      name: "ayat",
      component: AyatView,
    },
    {
      path: "/huruf",
      name: "huruf",
      component: HurufView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
  ],
});

export default router;
