<template>
  <div></div>
</template>

<script lang="ts">
import Vue from "vue";

interface Data {
  hoge: string;
}

const data: Data = {
  hoge: "min",
};

export default Vue.extend({
  data,
})
</script>
