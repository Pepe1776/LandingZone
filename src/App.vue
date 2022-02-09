<template>
  <Navbar />
  <Main />
  <footer></footer>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Main,
    Footer,
  },
};
</script>
