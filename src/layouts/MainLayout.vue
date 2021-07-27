<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "../views/components/Header.vue";
import Footer from "../views/components/Footer.vue";
export default {
  components: { Header, Footer },
  name: "Home",
};
</script>
