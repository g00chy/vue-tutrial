<template>
  <li>{{ todo.key }} {{ todo.text }}</li>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["todo"],
  name: "TodoList",
});
</script>
