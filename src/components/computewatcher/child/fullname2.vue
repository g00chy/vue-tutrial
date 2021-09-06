<template>
  <div>
    full name computed
    <div>
      <input v-model="firstName" /><br />
      <input v-model="lastName" />
    </div>
    <span>Fullname:</span><span v-text="fullName" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

type DataType = {
  firstName: string;
  lastName: string;
};

export default Vue.extend({
  data(): DataType {
    return {
      firstName: "",
      lastName: "",
    };
  },
  name: "FullName",
  computed: {
    fullName(): string {
      return this.firstName + " " + this.lastName;
    },
  },
});
</script>
