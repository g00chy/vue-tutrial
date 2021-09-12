<template>
  <div class="container">
    <h4>v-for</h4>
    <ul id="example-1">
      <li v-for="item in items" :key="item.message">
        {{ item.message }}
      </li>
    </ul>

    <h4>v-forval</h4>
    <ul id="v-for-object">
      <li v-for="(value, index, key) in object[0]" :key="key">
        {{ key }}:{{ index }}:{{ value }}
      </li>
    </ul>

    <h4>v-for-filttered</h4>
    <ul id="example-1">
      <li v-for="item in filtereItem" :key="item.message">
        {{ item.message }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style-position: inside;
}
</style>

<script lang="ts">
import Vue from "vue";
export type Item = Array<{ message: string }>;

export type DataType = {
  items: Item;
  object: Array<{ [index: string]: string }>;
};

export default Vue.extend({
  data(): DataType {
    return {
      items: [{ message: "test" }, { message: "test2" }, { message: "Foo!" }],
      object: [
        { title: "this is title.", author: "title", publishedAt: "2020-06-10" },
      ],
    };
  },
  computed: {
    filtereItem: function (): Array<{ message: string }> {
      return this.items.filter(function (item: {
        message: string;
      }): RegExpMatchArray | null {
        return item.message.match(/Foo/);
      });
    },
  },
});
</script>
