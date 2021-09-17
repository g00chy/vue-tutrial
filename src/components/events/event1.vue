<template>
  <div>
    <h3>events</h3>
    <h4>in on click</h4>
    <button v-on:click="counter += 1">count up</button>
    <p>count {{ counter }}</p>
    <h4>event handler</h4>
    <button v-on:click="greet">button</button>
    <h4>event handler</h4>
    <button v-on:click="say('hi')">Say hi</button>
    <button v-on:click="say('what')">Say what</button>
    <p>{{ message }}</p>
    <h4>method</h4>
    <button v-on:click="countUp">count up</button>
    <p>count {{ counter2 }}</p>
    <h4>$event</h4>
    <button v-on:click="messageAndEvent('wow', $event)">button</button>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => {
    return {
      counter: 0,
      counter2: 0,
      message: "",
    };
  },
  methods: {
    countUp: function (): void {
      this.counter2 += 1;
    },
    greet: function (event: { target: HTMLButtonElement }) {
      alert("Hello " + this.message + "!");
      if (event) {
        alert(event.target.tagName);
      }
    },
    say(param: string): void {
      this.message = param;
    },
    messageAndEvent(message: string, events: Event): void {
      if (events) {
        events.preventDefault();
      }
      this.message = message;
    },
  },
});
</script>
