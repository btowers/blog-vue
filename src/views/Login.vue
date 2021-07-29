<template>
  <b-row class="justify-content-center vh-100" align-v="center">
    <b-card style="width: 600px">
      <b-row class="justify-content-center">
        <b-img class="mb-3" height="100" src="logo.png" />
      </b-row>
      <hr />
      <b-form @submit="onSubmit">
        <b-form-group label="Email">
          <b-form-input
            v-model="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </b-form-group>

        <b-form-group label="Password">
          <b-form-input
            v-model="password"
            type="password"
            placeholder="Password"
            required
          />
        </b-form-group>
        <b-row align-h="between" class="mx-1">
          <div class="font-weight-light">Create Account</div>
          <b-button @click="onSubmit">Login</b-button>
        </b-row>
      </b-form>
    </b-card>
  </b-row>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      console.log({ email: this.email, password: this.password });
      axios
        .post("/api/user/login", { email: this.email, password: this.password })
        .then((response) => {
          console.log(response.data);
          //   this.$router.push("/");
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
