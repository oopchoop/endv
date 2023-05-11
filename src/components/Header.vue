<template>
  <header>
    <a class="navbar">
      <hr>
      <hr>
      <hr>
    </a>
    <router-link to="/" class="logo">WEARSHOP</router-link>
    <div class="navbar-icon">
      <router-link to="/favorite"><img src="@/assets/image/like.png" alt="Избранное"></router-link>
      <router-link to="/basket"><img src="@/assets/image/Basket.png" alt="Корзина"></router-link>
      <router-link to="/profile"><img src="@/assets/image/user.png" alt="Аккаунт"></router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>