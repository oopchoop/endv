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
      <router-link to="/sale" class="sale">Акции%</router-link>
      <router-link to="/catalog" class="close" >Одежда</router-link>
      <router-link to="/catalog" class="accessories">Аксессуары</router-link>
      <router-link to="/catalog" class="shoes">Обувь</router-link>
    </div>
    <div class="banner">
      <div class="sales">
        <div class="slider">
          <div class="title">-20% по промокоду <br>WINTER2023</div>
        </div>
      </div>
      <div class="another-banner">
        <div class="new">
          <div class="title">new</div>
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
