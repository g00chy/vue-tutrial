<template>
  <div>
    <h2>List Render</h2>
    <v-for></v-for>
    <v-for-2></v-for-2>
    <v-for-3></v-for-3>
  </div>
</template>

<script lang="ts">
import vFor from "@/components/listrender/v-for.vue";
import vFor2 from "@/components/listrender/v-for2.vue";
import vFor3 from "@/components/listrender/v-for3.vue";

import Vue from "vue";

export default Vue.extend({
  components: { vFor, vFor2, vFor3 },
  name: "vfor",
});
</script>
