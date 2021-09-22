<template>
  <div>
    <p>child_num: {{ child_num }}</p>
    <button @click="send">親に値を渡す</button>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.component("child", {
  data: function () {
    return {
      child_num: 0,
    };
  },
  methods: {
    send() {
      this.$emit("my-click", this.child_num);
    },
  },
});
</script>
