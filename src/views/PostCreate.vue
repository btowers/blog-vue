<template>
  <b-container>
    <b-row>
      <b-col />
      <b-col cols="10">
        <div class="my-3">
          <h3>Create a New Post</h3>
        </div>
        <b-form-input class="my-3" v-model="post.title" placeholder="Title" />
        <b-form-input
          class="my-3"
          v-model="post.intro"
          placeholder="A short description"
        />
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
    };
  },

  methods: {
    saveContent() {
      console.log("getting posts...");
      this.loading = true;
      axios
        .post("/api/post/", this.post)
        .then((response) => {
          console.log(response.data);
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
