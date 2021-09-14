<template>
  <div>
    <a href="https://jp.vuejs.org/v2/guide/events.html" target="_blank"
      >events</a
    ><br />
    <event-1></event-1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import event1 from "@/components/events/event1.vue";
export default Vue.extend({
  components: {event1},
});
</script>
