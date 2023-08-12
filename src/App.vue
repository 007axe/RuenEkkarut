<template>
  
  <NavBar />
  <HeadLogo />
  <Contact />
  
  <footer class="bg-gray-700 py-5">
    <p class="text-center text-white">Copyright &copy; 2023 Reun Ekkarut</p>
  </footer>
</template>

<script>
import Contact from "./components/Contact.vue";
import HeadLogo from "./components/HeadLogo.vue";
import NavBar from "./components/NavBar.vue";



export default {
  data() {
    return {
      
    }
  },
  components: {
    HeadLogo,
    NavBar,
    Contact,

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