import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import JuzView from "../views/JuzView.vue";
import AyatView from "../components/juz/AyatView.vue";

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
  ],
});

export default router;
