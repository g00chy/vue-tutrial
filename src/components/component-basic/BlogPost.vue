<template>
  <div class="blog-post">
    <h3>{{ post.title }}</h3>
    <div v-html="post.content"></div>
    <div v-html="post.publishedAt"></div>
    <button v-on:click="$emit('enlarge-text', 0.1)">Enlarge text</button>
    <button v-on:click="$emit('enlarge-text', -0.1)">Enmall text</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["post"],
});
</script>
