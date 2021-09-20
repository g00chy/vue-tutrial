<template>
  <div class="row">
    <component-property-detail class="col-3"></component-property-detail>
    <native-event class="col-3" value="test" label="test"></native-event>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ComponentPropertyDetail from "@/components/component-property/ComponentPropertyDetail.vue";
import NativeEvent from "@/components/component-property/CustomDetail/NativeEvent.vue";

export default Vue.extend({
  name: "ComponentProperty",
  components: { ComponentPropertyDetail, NativeEvent },
});
</script>
