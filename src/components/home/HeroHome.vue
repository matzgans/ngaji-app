<template>
  <div class="">
    <div class="h-60 bg-fixed bg-green-800">
      <div class="text-center text-white font-poppins">
        <img class="m-auto" width="200" src="../../assets/allah.png" alt="" />
      </div>
    </div>
    <div class="h-screen pt-6">
      <h2 class="font-poppins font-extrabold text-3xl text-center">
        YUK NGAJI
      </h2>
      <div class="grid ip:grid-cols-1 gap-4 pt-5">
        <div class="card w-full bg-base-300 shadow-xl p-5 grid ip:grid-cols-3">
          <div class="w-5">
            <h1><i class="fa-solid fa-book-quran text-5xl"></i></h1>
          </div>
          <div class="w-20 mt-auto mx-auto text-center font-bold">
            <h1>Al- Quran</h1>
            <p>Full juz</p>
          </div>
          <div class="w-auto mt-auto ms-auto">
            <router-link
              :to="{ name: 'juz' }"
              class="text-4xl text-success text-end"
              ><i class="fa-solid fa-circle-chevron-right"></i
            ></router-link>
          </div>
        </div>
        <div
          class="card w-full bg-base-300 shadow-xl p-5 grid ip:grid-cols-3 gap-1"
        >
          <div class="w-5">
            <h1><i class="fa-solid fa-book-quran text-5xl"></i></h1>
          </div>
          <div class="w-20 mt-auto mx-auto text-center font-bold">
            <h1>Hijaiyah</h1>
            <p>Full Huruf</p>
          </div>
          <div class="w-auto mt-auto ms-auto">
            <button class="text-4xl text-success text-end" @click="getHuruf">
              <i class="fa-solid fa-circle-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: localStorage.getItem("token"),
    };
  },
  mounted() {
    if (!this.token) {
    }
    console.log(this.token);
  },
  methods: {
    getHuruf() {
      if (!this.token) {
        this.$swal("Untuk Mengakses Fitur Ini Anda Harus Login");
        this.$router.push({ name: "login" });
      } else {
        this.$router.push({ name: "huruf" });
      }
    },
  },
};
</script>

<style></style>
