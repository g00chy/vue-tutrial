<template>
  <div class="row">
    <component-property-detail class="col-3"></component-property-detail>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ComponentPropertyDetail from "@/components/component-property/ComponentPropertyDetail.vue";

export default Vue.extend({
  name: "ComponentProperty",
  components: { ComponentPropertyDetail },
});
</script>
