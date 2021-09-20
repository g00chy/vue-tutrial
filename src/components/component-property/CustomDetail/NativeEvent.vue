<template>
  <label>
    {{ label }}
    <input v-bind="$attrs" v-bind:value="value" v-on="inputListeners" />
  </label>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.component("native-event", {
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: "",
      required: true,
    },
    label: {
      type: String,
      default: "",
      required: true,
    },
  },
  computed: {
    inputListeners: function () {
      // `Object.assign` が複数のオブジェクトを一つの新しいオブジェクトにマージします
      return Object.assign(
        {},
        // 親からの全てのリスナを追加します
        this.$listeners,
        // そしてカスタムリスナを追加したり
        // すでに存在するリスナの振る舞いを変えることができます
        {
          // こうすることでコンポーネントが v-model と動作します
          input: (event: InputEvent): void => {
            if (event.target && event.target.value) {
              console.log(this.$emit);
              this.$emit("input", event.target.value);
            }
          },
        }
      );
    },
  },
});
</script>
