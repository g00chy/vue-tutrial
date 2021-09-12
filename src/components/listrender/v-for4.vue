<template>
  <div id="todo-list-example">
    <form v-on:submit.prevent="addNewTodo">
      <label for="new-todo">Add a todo</label>
      <input
        v-model="newTodoText"
        id="new-todo"
        placeholder="E.g. Feed the cat"
      />
      <button v-on:click="newAddTodo">Add</button>
    </form>
    <ul>
      <li
        is="todo-item"
        v-for="(todo, index) in todos"
        v-bind:key="todo.id"
        v-bind:title="todo.title"
        v-on:remove="todos.splice(index, 1)"
      ></li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export type DataType = {
  todos: Array<{ id: number; title: string }>;
  newTodoText: string;
  nextTodoId: number;
};

let TodoItem = Vue.component("todo-item", {
  template:
    "<li> {{ title }} <button v-on:click=\"$emit('remove')\">Remove</button> </li>",
  props: ["title"],
});

export default Vue.extend({
  name: "v-for4",
  components: {
    TodoItem,
  },
  data: (): DataType => {
    return {
      todos: [
        {
          id: 1,
          title: "hogehoge",
        },
        {
          id: 2,
          title: "hogehoge",
        },
        {
          id: 3,
          title: "hogehoge",
        },
      ],
      newTodoText: "",
      nextTodoId: 4,
    };
  },
  methods: {
    newAddTodo: function (): void {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText,
      });
      this.newTodoText = "";
    },
  },
});
</script>
