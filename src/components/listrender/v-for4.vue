<template>
  <div id="todo-list-example">
    <form v-on:submit.prevent="addNewTodo">
      <label for="new-todo">Add a todo</label>
      <input
        v-model="newTodoText"
        id="new-todo"
        placeholder="E.g. Feed the cat"
      />
      <button>Add</button>
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
    see:
    <a href="https://cli.vuejs.org/config/#runtimecompiler">runtimecompiler </a>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export type DataType = {
  todos: Array<{ id: number; title: string }>;
  newTodoText: string;
  nextTodoId: number;
};

const TodoItem = Vue.component("todo-item", {
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
      newTodoText: "",
      todos: [
        {
          id: 1,
          title: "Do the dishes",
        },
        {
          id: 2,
          title: "Take out the trash",
        },
        {
          id: 3,
          title: "Mow the lawn",
        },
      ],
      nextTodoId: 4,
    };
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText,
      });
      this.newTodoText = "";
    },
  },
});
</script>
