<template>
  <div class="navbar sticky top-0 z-50 glass">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu- dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box ip:w-94"
        >
          <li>
            <router-link
              exact-active-class="bg-green-800 text-white"
              :to="{ name: 'home' }"
              >Homepage</router-link
            >
          </li>
          <li><a>Temu Langsung</a></li>
          <li>
            <router-link
              exact-active-class="bg-green-800 text-white"
              :to="{ name: 'login' }"
              >Login</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <a class="btn btn-ghost text-xl font-poppins space-x-0"
        ><i class="fa-sharp fa-solid fa-mosque"></i>Monga<span
          class="text-green-900"
          >DI</span
        ></a
      >
    </div>
    <div class="navbar-end"></div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
