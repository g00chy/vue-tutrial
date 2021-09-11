<template>
  <Index />
</template>

<script lang="ts">
import Vue from "vue";
import Index from "../components/computewatcher/Index.vue";

export default Vue.extend({
  name: "ComputeWatcher",
  components: {
    Index,
  },
});
</script>
