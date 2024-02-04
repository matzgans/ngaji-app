<template>
  <div>
    <NavbarView class="sticky top-0 z-50" />
    <HeroJuz />
  </div>
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
import HeroJuz from "@/components/juz/HeroJuz.vue";
export default {
  components: {
    NavbarView,
    HeroJuz,
  },
};
</script>

<style></style>
