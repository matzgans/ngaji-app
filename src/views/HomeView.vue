<template>
  <div>
    <NavbarView class="sticky top-0 z-50" />
    <HeroHome class="static top-0 z-10" />
  </div>
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
import HeroHome from "../components/home/HeroHome.vue";
export default {
  components: {
    NavbarView,
    HeroHome,
  },
};
</script>

<style></style>
