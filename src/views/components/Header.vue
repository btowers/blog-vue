<template>
  <b-navbar type="dark" variant="info">
    <b-col />
    <b-col cols="8">
      <b-row>
        <b-navbar-brand @click="goHome()">
          <img src="logo.png" height="50" /> <span>My Blog</span>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <b-icon icon="person-circle" font-scale="2"></b-icon>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-row>
    </b-col>
    <b-col />
  </b-navbar>
</template>
<script>
import {
  BNavbarBrand,
  BNavbar,
  BDropdownItem,
  BNavItemDropdown,
  BNavbarNav,
  BNavbarToggle,
  BCollapse,
  BIcon,
} from "bootstrap-vue";
export default {
  components: {
    BNavbarBrand,
    BNavbar,
    BDropdownItem,
    BNavItemDropdown,
    BNavbarNav,
    BNavbarToggle,
    BCollapse,
    BIcon,
  },
  name: "Header",
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>
