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
    <hr>
  </section>
  <section class="catalog-sec">
    <h1>Акции</h1>
    <div class="content-catalog">
      <div class="sort">
        <form action="" method="post">
          <p><select size="1"  name="">
            <option >Сортировать по</option>
            <option value="max стоимость">max стоимость</option>
            <option selected value="min стоимость">min стоимость</option>
            <option value="По популярности">По популярности</option>
          </select></p>
        </form>
        <form action="" method="post">
          <p><select size="1"  name="">
            <option >Цвет</option>
            <option value="max стоимость">Черный</option>
            <option selected value="min стоимость">Белый</option>
            <option value="По популярности">Бежевый</option>
          </select></p>
        </form>
        <form action="" method="post">
          <p><select size="1"  name="">
            <option >Размер</option>
            <option value="max стоимость">40</option>
            <option selected value="min стоимость">42</option>
            <option value="По популярности">44</option>
            <option value="По популярности">46</option>
            <option value="По популярности">48</option>
            <option value="По популярности">50</option>
            <option value="По популярности">52</option>
          </select></p>
        </form>
        <form action="" method="post">
          <p><select size="1"  name="">
            <option >Материал</option>
            <option value="max стоимость">Хлопок</option>
            <option selected value="min стоимость">Вискоза</option>
            <option value="По популярности">Лен</option>
            <option value="По популярности">Шерсть</option>
            <option value="По популярности">Эластан</option>
          </select></p>
        </form>
        <form action="" method="post">
          <p><select size="1"  name="">
            <option >Цена</option>
            <option value="max стоимость">до 1000</option>
            <option selected value="min стоимость">до 2000</option>
            <option value="По популярности">до 5000</option>
            <option value="По популярности">выше 5000</option>
          </select></p>
        </form>
      </div>
      <div class="flex-column">
        <div class="menu">
          <div class="categoria">
            <p class="title">Одежда</p>
            <ul>
              <a href="#"><li>Рубашки и блузы</li></a>
              <a href="#"><li>Брюки</li></a>
              <a href="#"><li>Юбки</li></a>
              <a href="#"><li>Платья</li></a>
              <a href="#"><li>Джинсы</li></a>
            </ul>
          </div>
          <div class="categoria">
            <p class="title">Обувь</p>
            <ul>
              <a href="#"><li>Ботинки</li></a>
              <a href="#"><li>Кроссовки</li></a>
              <a href="#"><li>Туфли</li></a>
            </ul>
          </div>
          <div class="categoria">
            <p class="title">Аксессуары</p>
            <ul>
              <a href="#"><li>Серьги</li></a>
              <a href="#"><li>Кольца</li></a>
              <a href="#"><li>Очки</li></a>
              <a href="#"><li>Головные уборы</li></a>
            </ul>
          </div>
        </div>
        <div class="orders-catalog">
          <div class="orders-catalog">
            <div class="order-catalog">
              <div class="image-order">
                <img src="@/assets/image/skirts.jpg" class="img-order">
                <img src="@/assets/image/like%20(2).png" class="like">
              </div>
              <div class="info-order">
                <div class="name">Юбка-мини</div>
                <div class="price">
                  <p class="pr">1999 ₽</p>
                  <p class="sale-pr">3000 <span class="pr">₽</span></p>
                </div>
                <button class="button-basket">В корзину</button>
              </div>
            </div>
            <div class="order-catalog">
              <div class="image-order">
                <img src="@/assets/image/sneakers.png" class="img-order">
                <img src="@/assets/image/like%20(2).png" class="like">
              </div>
              <div class="info-order">
                <div class="name">Юбка-мини</div>
                <div class="price">
                  <p class="pr">1999 ₽</p>
                  <p class="sale-pr">3000 <span class="pr">₽</span></p>
                </div>
                <button class="button-basket">В корзину</button>
              </div>
            </div>
            <div class="order-catalog">
              <div class="image-order">
                <img src="@/assets/image/pants.jpg" class="img-order">
                <img src="@/assets/image/like%20(2).png" class="like">
              </div>
              <div class="info-order">
                <div class="name">Юбка-мини</div>
                <div class="price">
                  <p class="pr">1999 ₽</p>
                  <p class="sale-pr">3000 <span class="pr">₽</span></p>
                </div>
                <button class="button-basket">В корзину</button>
              </div>
            </div>
            <div class="order-catalog">
              <div class="image-order">
                <img src="@/assets/image/jacket.jpg" class="img-order">
                <img src="@/assets/image/like%20(2).png" class="like">
              </div>
              <div class="info-order">
                <div class="name">Юбка-мини</div>
                <div class="price">
                  <p class="pr">1999 ₽</p>
                  <p class="sale-pr">3000 <span class="pr">₽</span></p>
                </div>
                <button class="button-basket">В корзину</button>
              </div>
            </div>
            <div class="order-catalog">
              <div class="image-order">
                <img src="@/assets/image/sandals.png" class="img-order">
                <img src="@/assets/image/favorite.png" class="like">
              </div>
              <div class="info-order">
                <div class="name">Юбка-мини</div>
                <div class="price">
                  <p class="pr">1999 ₽</p>
                  <p class="sale-pr">3000 <span class="pr">₽</span></p>
                </div>
                <button class="button-basket">В корзину</button>
              </div>
            </div>
            <div class="order-catalog">
              <div class="image-order">
                <img src="@/assets/image/tops.jpg" class="img-order">
                <img src="@/assets/image/like%20(2).png" class="like">
              </div>
              <div class="info-order">
                <div class="name">Юбка-мини</div>
                <div class="price">
                  <p class="pr">1999 ₽</p>
                  <p class="sale-pr">3000 <span class="pr">₽</span></p>
                </div>
                <button class="button-basket">В корзину</button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
