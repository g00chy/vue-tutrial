<template>
  <a v-bind:href="url" class="nav-link">
    <slot name="link-string" />
  </a>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.component("navigation-link", {
  props: ["url"],
});
</script>
