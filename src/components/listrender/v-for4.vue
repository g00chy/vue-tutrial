<template>
  <div>
    <ul v-for="(n, key) in arrayNum" :key="key">
      test
      <li v-for="(data, key) in getHalf(n)" :key="`first-${key}`">
        {{ data }}
      </li>
    </ul>
    <ul v-for="(n, key) in arrayNum2" :key="`sec-parrent-${key}`">
      <li>{{ n.message }}</li>
      <li v-for="(num, key2) in getHalf(n.num)" :key="`sec-${key2}`">
        {{ num }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export type DataType = {
  arrayNum: Array<Array<number>>;
  arrayNum2: Array<{ message: string; num: Array<number> }>;
};

export default Vue.extend({
  name: "v-for3",
  data: (): DataType => {
    return {
      arrayNum: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
      ],
      arrayNum2: [
        { message: "v1", num: [1, 2, 3, 4, 5] },
        { message: "v2", num: [6, 7, 8, 9, 10] },
      ],
    };
  },
  methods: {
    getHalf(records: Array<number>): number[] {
      console.log(records);
      return records.filter((item: number): boolean => {
        return item % 2 == 0;
      });
    },
  },
});
</script>
