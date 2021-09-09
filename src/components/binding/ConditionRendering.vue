<template>
  <div>
    <div v-if="ok">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </div>
    <div v-else>test</div>
    <div v-show="ok">v-show</div>
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">
      ほげぇ
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Binding",
  data() {
    return {
      ok: true,
      activeColor: "red",
      fontSize: 20,
    };
  },
});
</script>
