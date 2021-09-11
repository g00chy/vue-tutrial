<template>
  <div>
    <h2>Style binding</h2>
    <StyleBinding></StyleBinding>

    <h2>v-if</h2>
    <condition-rendering></condition-rendering>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import StyleBinding from "../components/binding/StyleBinding.vue";
import ConditionRendering from "../components/binding/ConditionRendering.vue";

export default Vue.extend({
  name: "Binding",
  components: {
    StyleBinding,
    ConditionRendering,
  },
});
</script>
