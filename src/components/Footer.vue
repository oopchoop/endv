<template>
  <footer>
    <div class="navbar">
      <div class="menu">
        <p>Каталог</p>
        <div class="categories">
          <router-link to="/sale">Акции</router-link>
          <router-link to="/catalog">Одежда</router-link>
          <router-link to="/catalog">Аксессуары</router-link>
          <router-link to="/catalog">Обувь</router-link>
        </div>
      </div>
      <div class="menu">
        <p>Профиль</p>
        <div class="categories">
          <router-link to="/orders">Мои заказы</router-link>
          <router-link to="/favorite">Избранное</router-link>
          <router-link to="/basket">Корзина</router-link>
          <router-link to="/profile">Личные данные</router-link>
          <router-link to="/activeOrders">Действующие заказы</router-link>
        </div>
      </div>
      <div class="menu">
        <p>Акции</p>
        <div class="categories">
          <router-link to="/catalog">Одежда</router-link>
          <router-link to="/catalog">Аксессуары</router-link>
          <router-link to="/catalog">Обувь</router-link>
        </div>
      </div>
      <div class="menu">
        <router-link to="/about">О нас</router-link>
        <div class="social-media">
          <a href="https://vk.com"><img src="@/assets/image/vk-com.png" alt=""></a>
          <a href="https://instagram.com"><img src="@/assets/image/instagram-new.png" alt=""></a>
        </div>
        <div class="categories">
          <router-link to="/about">Информация о компании</router-link>
          <a href="#">Тел: +7(351)999-99-99</a>
          <a href="#">Почта: wearshop@mail.ru</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>