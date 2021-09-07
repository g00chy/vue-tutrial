<template>
  <div>
    <div v-if="ok">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </div>
    <div v-else>test</div>
    <div v-show="ok">v-show</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Binding",
  data() {
    return {
      ok: true,
    };
  },
});
</script>
