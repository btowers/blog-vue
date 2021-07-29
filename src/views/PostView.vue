<template>
  <b-container>
    <b-row>
      <b-col />
      <b-col cols="10">
        <h1 class="pt-3" style="font-family: 'Playfair Display', serif;">
          {{ post.title }}
        </h1>
        <h5 class="font-weight-light">{{ post.intro }}</h5>
        <b-row align-h="between" class="pb-5">
          <b-col cols="4">{{ post.author }}</b-col>
          <b-col cols="4">{{ post.createdAt | dateFormat }}</b-col>
        </b-row>
        <hr />
        <p style="font-family: 'Roboto', sans-serif;">
          <span v-html="post.body"></span>
        </p>
      </b-col>
      <b-col />
    </b-row>
  </b-container>
</template>
<script>
import { BContainer, BRow, BCol } from "bootstrap-vue";
import axios from "axios";
import dayjs from "dayjs";

export default {
  components: { BContainer, BRow, BCol },
  name: "Body",
  data() {
    return {
      post: { title: "", body: "" },
    };
  },
  mounted() {
    this.getPost(this.$route.params.id);
  },

  methods: {
    getPost(id) {
      console.log("getting posts...");
      this.loading = true;
      axios
        .get("/api/post/" + id)
        .then((response) => {
          this.post = response.data;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
        });
    },
  },

  filters: {
    dateFormat: function(value) {
      return dayjs(value).format("DD-MM-YYYY");
    },
  },
};
</script>
