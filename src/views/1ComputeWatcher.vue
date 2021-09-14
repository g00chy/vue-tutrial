<template>
  <Compute />
</template>

<script lang="ts">
import Vue from "vue";
import Compute from "../components/computewatcher/compute.vue";

export default Vue.extend({
  name: "ComputeWatcher",
  components: {
    Compute,
  },
});
</script>
