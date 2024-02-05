<template>
  <div class="h-screen flex justify-center items-center">
    <div class="card bg-base-300 ip:w-full mx-2">
      <div class="h-1/2 bg-green-800 rounded-t-xl flex">
        <img
          src="../assets/allah.png"
          width="120"
          alt=""
          srcset=""
          class="m-auto"
        />
        <h1 class="flex justify-center items-center text-white text-2xl">
          Monga <span>DI</span>
        </h1>
        <img
          src="../assets/muhammad.png"
          width="120"
          alt=""
          srcset=""
          class="m-auto"
        />
      </div>
      <div class="card-body">
        <h1 class="text-green-800 text-center font-bold">
          Bisa Baca Al - Qura`an
        </h1>
        <form action="" class="w-full">
          <div class="mb-2">
            <input
              type="email"
              placeholder="Email"
              class="input input-bordered input-success w-full max-w-xs"
            />
          </div>
          <div class="mb-2">
            <input
              type="password"
              placeholder="password"
              class="input input-bordered input-success w-full max-w-xs"
            />
          </div>
          <button class="btn btn-success w-full text-white hover:bg-green-400">
            Login
          </button>
        </form>
        <p>
          Belum Punya Akun?
          <span
            ><router-link :to="{ name: 'register' }" class="text-green-800"
              >Register</router-link
            ></span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
