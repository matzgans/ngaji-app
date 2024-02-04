<template>
  <div>
    <div v-for="item in data" :key="item">
      <div
        class="card border-solid border-2 border-green-800 w-auto p-4 bg-base-300 m-4 shadow-xl"
      >
        <div class="grid ip:grid-cols-2 mb-3">
          <div class="w-60">
            <h1 class="text-lg">{{ item.namaLatin }}</h1>
            <p>
              <span>Jumlah Ayat : </span><span>{{ item.jumlahAyat }}</span>
            </p>
            <p>
              <span>Tempat Turun : </span><span>{{ item.tempatTurun }}</span>
            </p>

            <!-- <div v-for="audio in item.audioFull" :key="audio">
            <audio controls>
              <source src="horse.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div> -->
          </div>
          <div class="w-auto">
            <h1 class="text-end">{{ item.nama }}</h1>
            <div class="text-end mt-4">
              <router-link
                :to="{ name: 'ayat', params: { id: item.nomor } }"
                class=""
              >
                <i
                  class="fa-solid fa-circle-arrow-right text-green-800 text-2xl"
                ></i>
              </router-link>
            </div>
          </div>
        </div>

        <audio controls class="mx-auto">
          <source :src="item.audioFull['02']" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
    <div class="sticky bottom-2 text-end pe-10">
      <router-link :to="{ name: 'home' }">
        <i class="fa-solid fa-circle-arrow-left text-3xl"></i
        ><span class="text-2xl">Kembali</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.getDataSurah();
  },
  methods: {
    async getDataSurah() {
      let response = await axios.get("https://equran.id/api/v2/surat");

      if (response.status == 200) {
        this.data = response.data.data;
        console.log(response.data.data);
      }
    },
  },
};
</script>

<style></style>
