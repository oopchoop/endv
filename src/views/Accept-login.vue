<template>
  <Header></Header>
  <section class="accept">
    <h2>Введите код из письма</h2>
    <form action="#">
      <input type="text" name="code" placeholder="Код из письма">
      <input type="submit" value="Подтвердить">
    </form>
    <p>
      Не пришел код <a href="#">Отправить повторно</a>
    </p>
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
