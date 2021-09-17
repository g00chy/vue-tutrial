<template>
  <div v-on:click.once="doThis" class="row">
    <div class="col-2">
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
    </div>
    <div class="col-2">
      <h4>method</h4>
      <button v-on:click="countUp">count up</button>
      <p>count {{ counter2 }}</p>
      <h4>$event</h4>
      <button v-on:click="messageAndEvent('wow', $event)">button</button>
      <p>{{ message }}</p>
      <h4>key event</h4>
      <input v-on:keyup.page-down="onPageDown" />
      <h4>Mouse event on stop</h4>
      <a href="https://qiita.com/Yorinton/items/f7eb54f05609750da7f5">see: </a>
      <div @click="eventDebug('親')">
        <div @click.stop="eventDebug('子', $event)">ボタン</div>
      </div>
      <div @click="eventDebug('親')">
        <div @click="eventDebug('子', $event)">ボタン2</div>
      </div>
      <a href="google.com" class="event" @click.prevent="eventDebug('top')"
        >test</a
      >
      <div @click="eventDebug('親', $event)">
        <div @click.capture="eventDebug('子', $event)">ボタン</div>
      </div>
      <div v-on:click.self="eventDebug('button', $event)">
        test
        <div>ボタン</div>
      </div>
      <div v-on:click="eventDebug('test-button', $event)">
        test
        <div>ボタン</div>
      </div>
      <native-event @click.native="eventDebug('native', $event)"
        >native</native-event
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NativeEvent from "@/components/events/event-native.vue";

export default Vue.extend({
  components: {
    NativeEvent
  },
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
    doThis(): void {
      console.log("hoge");
    },
    onPageDown(event: { target: HTMLInputElement }): void {
      console.log(event);
      this.$data.message = event.target.tagName;
    },
    eventDebug(message: string, event: { target: HTMLInputElement }): void {
      console.log(event, message);
      this.$data.message = message;
    },
  },
});
</script>
