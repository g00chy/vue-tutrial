<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Component1",
  data: () => {
    return {
      count: 0,
    };
  },
  template:
    '<button v-on:click="count++">You clicked me {{ count }} times. </button>',
});
</script>
