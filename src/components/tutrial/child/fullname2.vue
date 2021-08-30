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
import { ThisTypedComponentOptionsWithRecordProps } from "vue/types/options";

interface DataType {
  firstName: string,
  lastName: string,
}

interface MethodType {}
interface ComputedType {
  fullName(): void
}
interface PropType {}

export default Vue.extend({
  data() {
    return {
      firstName: "",
      lastName: "",
    };
  },
  name: "FullName",
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
  },
} as ThisTypedComponentOptionsWithRecordProps<Vue, DataType, MethodType, ComputedType, PropType>);
</script>
