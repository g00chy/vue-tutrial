<template>
  <Binding1></Binding1>
</template>

<script lang="ts">
import Vue from "vue";
import Binding1 from "../components/binding/Binding1.vue";

export default Vue.extend({
  name: "Binding",
  components: {
    Binding1,
  }
});
</script>
