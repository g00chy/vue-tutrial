<template>
  <div class="static" :class="classObject">test</div>
</template>
<style>
.text-danger {
  color: red;
}
.active {
  font-style: italic;
}
</style>

<script lang="ts">
import Vue from "vue";
export type DataType = {
  isActive: boolean;
  hasError: boolean;
};

export default Vue.extend({
  name: "Binding",
  data(): DataType {
    return {
      isActive: true,
      hasError: true,
    };
  },
  computed: {
    classObject(): DataType {
      return {
        active: this.isActive,
        "text-danger": this.hasError,
      };
    },
  },
});
</script>
