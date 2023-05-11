<template>
  <Header></Header>
  <section class="content">
    <div class="offer">
      <div class="gender">
        <p class="women gr selected-gr">Женщинам</p>
        <p class="men gr">Мужчинам</p>
        <p class="children gr">Детям</p>
      </div>
      <div class="search">
        <form class="form">
          <input type="text" name="" id="" placeholder="Найти товар">
        </form>
        <button><img src="@/assets/image/search.png" alt=""></button>
      </div>
    </div>
    <div class="catalog">
      <router-link to="/catalog" class="new">Новинки</router-link>
      <router-link to="/sale" class="sale">Акции%</router-link>
      <router-link to="/catalog" class="close">Одежда</router-link>
      <router-link to="/catalog" class="accessories">Аксессуары</router-link>
      <router-link to="/catalog">Обувь</router-link>
      <router-link to="/catalog">Спорт</router-link>
    </div>
    <hr>
  </section>
  <section class="about-content">
    <h2>О комании</h2>
    <div class="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet deserunt dolore dolorem, ea enim facilis laudantium magnam, minima molestias nostrum possimus quae quod ratione reiciendis reprehenderit repudiandae saepe totam vel!</div>
    <div class="contacts">
      <div class="social-media">
        <h3>Мы в социальных сетях</h3>
        <div class="image">
          <img src="@/assets/image/vk-com.png" alt="">
          <img src="@/assets/image/instagram-new.png" alt="">
        </div>
      </div>
      <div class="contact">
        <h3>Свяжитесь с нами</h3>
        <div class="info-contact">
          <div class="phone-number">
            <img src="@/assets/image/phone.png" alt="">
            <p>+7(351) 999-99-99</p>
          </div>
          <div class="phone-number">
            <img src="@/assets/image/new-post.png" alt="">
            <p>wearshop@mail.ru</p>
          </div>
        </div>
      </div>

    </div>
  </section>
  <section class="subscribe">
    <h3>Подпишись чтобы следить за новинками</h3>
    <form action="">
      <input type="text" name="email" placeholder="Введите свой email">
      <input type="submit" value="Подписаться">
    </form>
  </section>
  <Footer></Footer>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
  data(){
    return {}
  },
  components: {
    Header,
    Footer
  },
  methods: {},
}
</script>
