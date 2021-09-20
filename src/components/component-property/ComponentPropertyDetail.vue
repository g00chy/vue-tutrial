<template>
  <div>
    <a
      href="https://jp.vuejs.org/v2/guide/components-props.html"
      target="_blank"
      >Component Props</a
    >
    <label for="example-datepicker">Choose a date</label>
    <b-form-datepicker
      id="example-datepicker"
      v-model="value"
    ></b-form-datepicker>
    <p>Value: '{{ value }}'</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.component("ComponentPropertyDetail", {
  data: () => {
    return {
      value: "",
    };
  },
});
</script>
