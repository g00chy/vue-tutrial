<template>
  <div>
    <div v-if="ok">
      <h3>Title</h3>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </div>
    <div v-if="rand">
      <p>rand</p>
    </div>
    <div v-else-if="rand2"><p>elseif</p></div>
    <div v-else><p>else</p></div>
    <input-component></input-component>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import InputComponent from "./child/input.vue";

export default Vue.extend({
  name: "Binding",
  components: {
    InputComponent,
  },
  data() {
    return {
      ok: true,
      activeColor: "red",
      fontSize: 20,
    };
  },
  computed: {
    rand: (): boolean => {
      return Math.random() > 0.5;
    },
    rand2: (): boolean => {
      return Math.random() > 0.5;
    },
  },
});
</script>
