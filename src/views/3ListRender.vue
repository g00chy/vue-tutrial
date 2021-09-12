<template>
  <div class="row">
    <h2>List Render</h2>
    <div class="col-md-3">
      <h3>v-for</h3>
      <v-for class="child"></v-for>
    </div>
    <div class="col-md-3">
      <h3>v-for-2</h3>
      <v-for-2 class="child col-md-3"></v-for-2>
    </div>
    <div class="col-md-3">
      <h3>v-for-3</h3>
      <v-for-3 class="child"></v-for-3>
    </div>
    <div class="col-md-12">
      <h2>component</h2>
      <h3>v-for-4</h3>
      <v-for-4 class="child"></v-for-4>
    </div>
  </div>
</template>

<style scoped>
.child >>> ul {
  list-style-position: inside;
}
.border {
  border: dashed red;
}
</style>

<script lang="ts">
import vFor from "@/components/listrender/v-for.vue";
import vFor2 from "@/components/listrender/v-for2.vue";
import vFor3 from "@/components/listrender/v-for3.vue";
import vFor4 from "@/components/listrender/v-for4.vue";

import Vue from "vue";

export default Vue.extend({
  components: { vFor, vFor2, vFor3, vFor4 },
  name: "vfor",
});
</script>
