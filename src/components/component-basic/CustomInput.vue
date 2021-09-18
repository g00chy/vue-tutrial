<template>
  <div>
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
    {{ value }}
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["value"],
});
</script>
