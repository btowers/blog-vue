<template>
  <b-container>
    <b-row>
      <b-col />
      <b-col cols="8">
        <div v-for="post in posts" :key="post._id">
          <Post :title="post.title" :body="post.body" :image="post.image" />
        </div>
      </b-col>
      <b-col />
    </b-row>
  </b-container>
</template>
<script>
import { BContainer, BRow, BCol } from "bootstrap-vue";
import axios from "axios";
import Post from "./components/PostCard.vue";
export default {
  components: { Post, BContainer, BRow, BCol },
  name: "Body",
  data() {
    return {
      posts: [
        {
          title: "hola",
          body:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          image: "https://placekitten.com/1000/300",
        },
        {
          title: "chau",
          body: "este es un texto de prueba....",
          image: "https://placekitten.com/1000/300",
        },
        {
          title: "quetal",
          body: "este es un texto de prueba....",
          image: "https://placekitten.com/1000/300",
        },
      ],
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      console.log("getting posts...");
      this.loading = true;
      axios
        .get("/api/post/")
        .then((response) => {
          this.posts = response.data;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
        });
    },
  },
};
</script>
