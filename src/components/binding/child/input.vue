<template>
  <div>
    <h4>with no key</h4>
    <div v-if="loginType">
      <label>Username</label>
      <input placeholder="Enter your username" />
    </div>
    <div v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" />
    </div>
    <button v-on:click="loginChange" value="change">button</button>
    <h4>with key</h4>
    <div v-if="loginType">
      <label>Username</label>
      <input placeholder="Enter your username" key="username-input" />
    </div>
    <div v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email-input" />
    </div>
    <button v-on:click="loginChange" value="change">button</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      loginType: true,
    };
  },
  methods: {
    loginChange(): void {
      console.log("change");
      this.loginType = !this.loginType;
    },
  },
});
</script>
