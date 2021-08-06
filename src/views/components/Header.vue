<template>
  <b-navbar sticky type="dark" variant="info">
    <b-col />
    <b-col cols="8">
      <b-row>
        <b-navbar-brand style="cursor: pointer" @click="go('/')">
          <img src="/logo.png" height="50" /> <span>My Blog</span>
        </b-navbar-brand>
        <b-collapse is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown :no-caret="true" right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <b-icon icon="list" font-scale="2"></b-icon>
              </template>
              <b-dropdown-item @click="go('/post/add')">
                New Article
              </b-dropdown-item>
              <b-dropdown-divider />
              <b-dropdown-item @click="go('/user/profile')">
                Profile
              </b-dropdown-item>
              <b-dropdown-item @click="logout()">
                Sign Out
              </b-dropdown-item>
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
  BCollapse,
  BIcon,
} from 'bootstrap-vue';
import axios from 'axios';
export default {
  components: {
    BNavbarBrand,
    BNavbar,
    BDropdownItem,
    BNavItemDropdown,
    BNavbarNav,
    BCollapse,
    BIcon,
  },
  name: 'Header',
  methods: {
    go(route) {
      this.$router.push(route);
    },
    logout() {
      axios
        .get('/api/user/logout')
        .then((response) => {
          if (response.data == 'OK') {
            this.$router.push({ name: 'login' });
          }
        })
        .catch((err) => {
          console.log(err.message);
          console.log(err);
        });
    },
  },
};
</script>
