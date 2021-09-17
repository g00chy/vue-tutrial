<template>
  <div class="row">
    <!-- <yorimiti-vue></yorimiti-vue> -->
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
// import YorimitiVue from "@/components/yorimiti/Yorimiti.vue";
import Vue from "vue";

export default Vue.extend({
  // components: { YorimitiVue },
  name: "Yorimiti",
});
</script>
