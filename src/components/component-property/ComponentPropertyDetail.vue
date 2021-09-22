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
    <h4>$emitがうまいこと動かなかったので、他のサンプルを動かしてみる</h4>
    <p>Value: '{{ value }}'</p>
    <p>parent_num: {{ parent_num }}</p>
    <Child @my-click="parent_num = $event" />
    <h4>動いたのでサンプルをもっかい実装してみる</h4>
    {{ username }}
    <native-event
      label="Username:"
      v-model="username"
      required
      placeholder="Enter your username"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Child from "@/components/component-property/CustomDetail/Child.vue";
import NativeEvent from "@/components/component-property/CustomDetail/NativeEvent.vue";
export default Vue.component("ComponentPropertyDetail", {
  components: {
    Child,
    NativeEvent,
  },
  data: () => {
    return {
      value: "",
      username: "",
      parent_num: 100,
    };
  },
});
</script>
