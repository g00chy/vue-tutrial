<template>
  <div class="row">
    <component-property-detail class="col-3"></component-property-detail>
    <slot-vue class="col-3"></slot-vue>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ComponentPropertyDetail from "@/components/component-property/ComponentPropertyDetail.vue";
import SlotVue from "@/components/component-property/Slot.vue";

export default Vue.extend({
  name: "ComponentProperty",
  components: { ComponentPropertyDetail, SlotVue },
});
</script>
