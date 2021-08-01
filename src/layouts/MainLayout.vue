<template>
  <div>
    <Header />
    <b-overlay :show="loading" rounded="sm">
      <b-container class="vh-100">
        <transition name="component-fade" mode="out-in">
          <router-view />
        </transition>
      </b-container>
    </b-overlay>
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { BOverlay } from "bootstrap-vue";
import Header from "../views/components/Header.vue";
import Footer from "../views/components/Footer.vue";

export default {
  components: { Header, Footer, BOverlay },
  name: "Home",
  data() {
    return {};
  },

  computed: { ...mapState({ loading: (state) => state.user.loading }) },
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
