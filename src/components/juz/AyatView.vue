<template>
  <div>
    <NavbarView class="sticky top-0 z-50" />
    <div class="relative">
      <div
        class="card flex justify-center bg-green-800 text-white mx-3 shadow-lg"
      >
        <div class="card-body">
          <div class="text-center justify-center">
            <h1>
              {{ dataTitle.nama }}
            </h1>

            <h2>
              {{ dataTitle.namaLatin }}
            </h2>
            <p>( {{ dataTitle.arti }} )</p>
          </div>
          <div class="card-action"></div>
        </div>
      </div>
      <div class="card">
        <div class="card-body bg-base-300 m-3 rounded-lg shadow-lg">
          <div v-for="item in data" :key="item" class="text-end">
            <h1 class="mb-2">
              {{ item.teksArab }}
              <span class="me-5">( {{ item.nomorAyat }} )</span>
            </h1>
            <p class="pb-4 text-start">{{ item.teksIndonesia }}</p>
            <audio controls class="h-8 mb-5">
              <source :src="item.audio['02']" type="audio/mpeg" />
            </audio>
          </div>
        </div>
      </div>
    </div>
    <div class="sticky bottom-2 text-end pe-10">
      <router-link :to="{ name: 'juz' }">
        <i class="fa-solid fa-circle-arrow-left text-3xl"></i
        ><span class="text-2xl">Kembali</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavbarView from "../NavbarView.vue";
export default {
  components: {
    NavbarView,
  },
  data() {
    return {
      data: [],
      dataTitle: [],
    };
  },
  mounted() {
    console.log(this.$route.params);
    this.getDataAyat();
  },
  methods: {
    async getDataAyat() {
      let response = await axios.get(
        "https://equran.id/api/v2/surat/" + this.$route.params.id
      );

      if (response.status == 200) {
        this.data = response.data.data.ayat;
        this.dataTitle = response.data.data;
        console.log(response.data.data);
        console.log(response.data.data.ayat);
      }
    },
  },
};
</script>

<style></style>
