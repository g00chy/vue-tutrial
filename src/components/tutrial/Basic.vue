<template>
  <div>
    <span v-if="seen">seen</span>
    <div v-text="val">meta</div>
    <div v-text="worstProgrammingLanguages"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props :{
    val: {
      type: String,
      default: "hoge",
    },
    programmingLangauges: {
      type: String,
      default: "JavaScript, C#, PHP, Python, LALALA, HOHOHO",
    },
  },
  data() {
    return {seen: true};
  },
  computed: {
    worstProgrammingLanguages(): string {
      return this.programmingLangauges.split(", ").reverse().join(", ");
    },
  },
});
</script>
