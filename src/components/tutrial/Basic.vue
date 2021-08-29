<template>
  <div>
    <span v-if="seen">seen</span>
    <div v-text="val">meta</div>
    <div v-text="worstProgrammingLanguages"></div>

    <div class="row">
      <div class="col-12">
        <p>{{ beforeReverseMessage }}</p>
        <button v-on:click="reverseMesssage">Reverse!</button>
      </div>
      <div class="col-12">
        <TodoList
          v-for="item in groceryList"
          v-bind:todo="item"
          v-bind:key="item.id"
        ></TodoList>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoList from "./child/TodoList.vue";

export default Vue.extend({
  components: {
    TodoList,
  },
  props: {
    val: {
      type: String,
      default: "hoge",
    },
    programmingLangauges: {
      type: String,
      default: "JavaScript, C#, PHP, Python, LALALA, HOHOHO",
    },
  },
  data() {
    return {
      seen: true,
      beforeReverseMessage: "hello",
      groceryList: [
        { id: 0, text: "Vegetables" },
        { id: 1, text: "Cheese" },
        { id: 2, text: "Whatever else humans are supposed to eat" },
      ],
    };
  },
  computed: {
    worstProgrammingLanguages(): string {
      return this.programmingLangauges.split(", ").reverse().join(", ");
    },
  },
  methods: {
    reverseMesssage() {
      this.beforeReverseMessage = this.beforeReverseMessage
        .split("")
        .reverse()
        .join("");
    },
  },
});
</script>
