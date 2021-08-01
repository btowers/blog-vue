<template>
  <b-container>
    <b-row>
      <b-col />
      <b-col cols="10">
        <h1 class="py-3" style="font-family: 'Playfair Display', serif;">
          {{ post.title }}
        </h1>
        <b-row align-h="between" class="pb-2">
          <b-col cols="4">
            <b-icon-person-circle />{{ " " + post.author }}
          </b-col>
          <b-col cols="4">
            <div class="d-flex justify-content-end">
              {{ post.createdAt | dateFormat }}
            </div>
          </b-col>
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
import { BContainer, BRow, BCol, BIconPersonCircle } from "bootstrap-vue";
import axios from "axios";
import dayjs from "dayjs";

export default {
  components: { BContainer, BRow, BCol, BIconPersonCircle },
  name: "PostView",
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
