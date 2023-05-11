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
  </section>
  <section class="basket">
    <div class="content-basket">
      <div class="title">
        <h1>Корзина</h1>
        <h2>2 товара</h2>
      </div>
      <div class="orders">
        <div class="order">
          <div class="content-order">
            <img src="@/assets/image/basket_order.png" alt="">
            <div class="info_order">
              <p class="name">Очки солнцезащитные</p>
              <p class="color">Черный</p>
              <div class="count">
                <p class="minus">-</p>
                <p>1</p>
                <p class="pluse">+</p>
              </div>
              <div class="price">
                <h3 class="price_num">790</h3>
                <h3>₽</h3>
              </div>
            </div>
            <div class="actions">
              <img src="@/assets/image/like%20(2).png" alt="" class="image-actions">
              <img src="@/assets/image/filled-trash.png" alt="" class="image-actions">
            </div>
          </div>
          <hr>
        </div>
        <div class="order">
          <div class="content-order">
            <img src="@/assets/image/basket_order.png" alt="">
            <div class="info_order">
              <p class="name">Очки солнцезащитные</p>
              <p class="color">Черный</p>
              <div class="count">
                <p class="minus">-</p>
                <p>1</p>
                <p class="pluse">+</p>
              </div>
              <div class="price">
                <h3 class="price_num">790</h3>
                <h3>₽</h3>
              </div>
            </div>
            <div class="actions">
              <img src="@/assets/image/like%20(2).png" alt="" class="image-actions">
              <img src="@/src/assets/image/filled-trash.png" alt="" class="image-actions">
            </div>
          </div>
          <hr>
        </div>
      </div>
    </div>
    <div class="order-proccesing">
      <div class="price-order">
        <h1>Сумма заказа</h1>
        <div class="price-proccesing">
          <p class="price">1580</p>
          <p>₽</p>
        </div>
      </div>
      <div class="count-order">
        <h1>Количество товаров</h1>
        <p class="count">2</p>
      </div>
      <router-link to="/basket"><button class="button-basket">Оформить заказ</button></router-link>

    </div>
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
