<template>
  <div>
    <a href="https://jp.vuejs.org/v2/guide/forms.html" target="_blank">form</a>
    <event-1></event-1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import event1 from "@/components/form/form1.vue";
export default Vue.extend({
  components: { event1 },
});
</script>
