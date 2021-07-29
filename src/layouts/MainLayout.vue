<template>
  <div>
    <Header />
    <b-container class="vh-100">
      <transition name="component-fade" mode="out-in">
        <router-view />
      </transition>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Header from "../views/components/Header.vue";
import Footer from "../views/components/Footer.vue";

export default {
  components: { Header, Footer },
  name: "Home",
  data() {
    return {};
  },
};
</script>
<style scoped>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
