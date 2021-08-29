<template>
  <div>
    full name computed
    <div>
      <input v-model="firstName" /><br />
      <input v-model="lastName" />
    </div>
    <span>Fullname</span><span v-text="fullName" />
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
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
  },
});
</script>
