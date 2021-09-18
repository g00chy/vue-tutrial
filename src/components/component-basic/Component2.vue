<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Component2",
  // そもそもオブジェクト定義しようとするとtsだと実装できないので安心だねぇ
  data: function () {
    return {
      count: 0,
    };
  },
  template:
    '<button v-on:click="count++">You clicked me {{ count }} times. </button>',
});
</script>
