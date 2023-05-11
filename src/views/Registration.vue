<template>
  <Header></Header>
  <section class="reg-page">
    <h2>Регистрация</h2>
    <form action="#">
      <input type="text" name="name" placeholder="Ваше имя">
      <input type="text" name="email" placeholder="Ваш email или номер телефона">
      <input type="submit" value="Зарегистрироваться">
    </form>
    <router-link to="/authorization">Войти</router-link>
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
