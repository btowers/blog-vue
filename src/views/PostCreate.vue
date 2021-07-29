<template>
  <b-container>
    <b-row>
      <b-col />
      <b-col cols="10">
        <div class="my-3">
          <h3>Create a New Post</h3>
        </div>
        <b-form-input
          class="my-3"
          v-model="post.body"
          placeholder="Title"
        ></b-form-input>
        <b-form-input
          class="my-3"
          v-model="post.intro"
          placeholder="A short description"
        ></b-form-input>
        <div style="background: white;">
          <vue-editor v-model="post.body"></vue-editor>
        </div>
        <b-button @click="saveContent" class="my-3">Save</b-button>
      </b-col>
      <b-col />
    </b-row>
  </b-container>
</template>
<script>
import { BContainer, BRow, BCol, BFormInput, BButton } from "bootstrap-vue";
import { VueEditor } from "vue2-editor";
import axios from "axios";

export default {
  components: { BContainer, BRow, BCol, BFormInput, BButton, VueEditor },
  name: "Body",
  data() {
    return {
      post: { title: "", intro: "", body: "" },

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
