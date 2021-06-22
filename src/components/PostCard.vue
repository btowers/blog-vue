<template>
  <div v-b-hover="handleHover">
    <b-card
      @click="openPost"
      id="postcard"
      class="mt-3"
      :class="{ shadowClass: isHovered }"
      img-width="100"
      :img-src="image"
      img-top
      ><b-card-title>{{ title }}</b-card-title>
      <b-card-text class="text-truncate">
        {{ text }}
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
import { BCard, BCardTitle, BCardText } from "bootstrap-vue";
export default {
  components: { BCard, BCardTitle, BCardText },
  props: { title: String, text: String, image: String },
  name: "Post",
  data() {
    return {
      isHovered: false,
    };
  },
  methods: {
    openPost(hovered) {
      this.isHovered = hovered;
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
