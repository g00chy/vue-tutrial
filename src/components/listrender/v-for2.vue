<template>
  <ul>
    <li v-for="(n, key) in getData" :key="key">{{ n }}</li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";

export type DataType = {
  arrayNum: number[];
};

export default Vue.extend({
  name: "v-for2",
  data: (): DataType => {
    return {
      arrayNum: [1, 2, 3, 4, 5],
    };
  },
  computed: {
    getData: function (): number[] {
      return this.arrayNum.filter(function (number) {
        return number % 2 == 0;
      });
    },
  },
});
</script>
