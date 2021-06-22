import Vue from "vue";
import VueRouter from "vue-router";

// Routes
import {} from "@/auth/utils";

import dashboard from "./routes/dashboard";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    { path: "/", redirect: { name: "home" } },

    ...dashboard,

    {
      path: "*",
      redirect: "error-404",
    },
  ],
});

router.beforeEach(async (to, _, next) => {
  return next();
});

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById("loading-bg");
  if (appLoading) {
    appLoading.style.display = "none";
  }
});

export default router;
