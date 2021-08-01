<template>
  <b-container>
    <b-row>
      <b-col />
      <b-col cols="8">
        <div v-for="post in posts" :key="post._id">
          <Post :post="post" />
        </div>
      </b-col>
      <b-col />
    </b-row>
  </b-container>
</template>
<script>
import { BContainer, BRow, BCol } from "bootstrap-vue";
import { mapMutations } from "vuex";
import axios from "axios";
import Post from "./components/PostCard.vue";
export default {
  components: { Post, BContainer, BRow, BCol },
  name: "Body",
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      console.log("getting posts...");
      this.loading(true);
      axios
        .get("/api/post/")
        .then((response) => {
          console.log(response.data);
          this.posts = response.data;
          this.loading(false);
        })
        .catch((err) => {
          console.log(err);
          this.loading(false);
        });
    },

    ...mapMutations({
      loading: "user/LOADING",
    }),
  },
};
</script>
