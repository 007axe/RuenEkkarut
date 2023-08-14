<template>
  
  <NavBar />
  <HeadLogo />
  <TitleVue />
  <ProDucts/>
  <Contact />
  
  <footer class="bg-gray-700 py-5">
    <p class="text-center text-white">Copyright &copy; 2023 Reun Ekkarut</p>
  </footer>
</template>

<script>
import Contact from "./components/Contact.vue";
import HeadLogo from "./components/HeadLogo.vue";
import NavBar from "./components/NavBar.vue";
import TitleVue from "./components/Title.vue";
import ProDucts from "./components/ProDucts.vue";



export default {
  data() {
    return {
      
    }
  },
  components: {
    HeadLogo,
    NavBar,
    Contact,
    TitleVue,
    ProDucts

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