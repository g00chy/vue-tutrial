<template>
  <div>
    full name watch
    <div>
      <input v-model="firstName" /><br />
      <input v-model="lastName" />
    </div>
    <span>Fullname:</span><span v-text="fullname" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      firstName: "",
      lastName: "",
      fullname: "",
    };
  },
  name: "FullName",
  watch: {
    firstName: function (val) {
      this.fullname = val + " " + this.lastName;
    },
    lastName: function (val) {
      this.fullname = this.firstName + " " + val;
    },
  },
});
</script>
