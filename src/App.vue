<template>
  
  <NavBar />
  <HeadLogo />
  <Title/>
  <Product/>
  <Contact />
  
  <footer class="bg-gray-700 py-5">
    <p class="text-center text-white">Copyright &copy; 2023 Reun Ekkarut</p>
  </footer>
</template>

<script>
import Contact from "./components/Contact.vue";
import HeadLogo from "./components/HeadLogo.vue";
import NavBar from "./components/NavBar.vue";
import Title from "./components/Title.vue";
import Product from "./components/product.vue";



export default {
  data() {
    return {
      
    }
  },
  components: {
    HeadLogo,
    NavBar,
    Contact,
    Title,
    Product

  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  /* background-color: #51508A; */
  background-color: #232f2f;
}
</style>