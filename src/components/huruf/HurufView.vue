<template>
  <div>
    <NavbarView class="sticky top-0 z-50" />
    <div class="h-screen relative">
      <div class="h-60 bg-fixed bg-green-800 rounded-b-xl">
        <div class="text-center text-white font-poppins">
          <img class="m-auto" width="200" src="../../assets/allah.png" alt="" />
        </div>
      </div>
      <div class="mt-5 text-center mx-3">
        <h1 class="font-bold">
          Huruf <span class="text-green-800">Hijaiyah</span>
        </h1>

        <p class="text-justify">
          Huruf hijaiyah adalah syarat utama dalam pembacaan Al Quran. Sebab
          huruf ini merupakan dasar dari pembentukan kata dan kalimat yang ada
          di dalam Al Quran. Jika kalian sudah mengenal huruf-huruf hijaiyah
          pastinya kalian juga akan bisa dalam membaca Al Quran.
        </p>
      </div>
      <div class="card mt-5 bg-base-300 mx-3">
        <div class="m-3 flex">
          <div class="w-10">
            <h1 class="text-3xl text-center">ا</h1>
          </div>
          <div class="w-60">
            <audio controls class="w-60 h-10">
              <source src="../../assets/audioHuruf/alif.ogg" type="audio/ogg" />
            </audio>
          </div>
          <div class="w-10">
            <h1 class="text-center pt-2 text-black">Alif</h1>
          </div>
        </div>
      </div>
      <div class="card mt-5 bg-base-300 mx-3">
        <div class="m-3 flex">
          <div class="w-10">
            <h1 class="text-center pt-2 text-black">Alif</h1>
          </div>
          <div class="w-60">
            <audio controls class="w-60 h-10">
              <source src="../../assets/audioHuruf/alif.ogg" type="audio/ogg" />
            </audio>
          </div>
          <div class="w-10">
            <h1 class="text-3xl text-center">ب</h1>
          </div>
        </div>
      </div>
      <div class="sticky bottom-2 text-end pe-10">
        <router-link :to="{ name: 'home' }">
          <i class="fa-solid fa-circle-arrow-left text-3xl"></i
          ><span class="text-2xl">Kembali</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarView from "../NavbarView.vue";
export default {
  components: {
    NavbarView,
  },
};
</script>

<style></style>
