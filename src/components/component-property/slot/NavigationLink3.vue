<template>
  <div>
    <a v-bind:href="url" class="nav-link">
      <slot name="link-string"></slot>
    </a>
    first
    <slot name="first" />
    second
    <slot name="second" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.component("navigation-link3", {
  props: ["url"],
  data: () => {
    return {
      username: "hogefugamiga",
    };
  },
});
</script>
