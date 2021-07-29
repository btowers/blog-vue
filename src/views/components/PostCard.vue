<template>
  <div v-b-hover="handleHover">
    <b-card
      @click="openPost(post._id)"
      :img-src="post.image"
      img-alt="Card image"
      img-left
      :class="{ shadowClass: isHovered, 'my-3': true }"
    >
      <b-card-title>{{ post.title }}</b-card-title>
      <b-card-text class="text-truncate">
        {{ post.intro }}
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
import { BCard, BCardTitle, BCardText } from "bootstrap-vue";
export default {
  components: { BCard, BCardTitle, BCardText },
  props: { post: Object },
  name: "Post",
  data() {
    return {
      isHovered: false,
    };
  },
  methods: {
    openPost(id) {
      this.$router.push(`/post/${id}`);
    },
    handleHover(hovered) {
      this.isHovered = hovered;
    },
  },
};
</script>
<style lang="css" scoped>
.shadowClass {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
}
</style>
