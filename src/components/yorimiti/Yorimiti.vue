<template>
  <div>{{ data }}</div>
</template>

<script lang="ts">
import Vue from "vue";
import VueResource from "vue-resource";
Vue.use(VueResource);

type DataType = {
  data: string;
};

export default Vue.extend({
  data(): DataType {
    return {
      data: "",
    };
  },
  created: function () {
    // CORS policyでリクエストできないんで
    this.$http
      .get("https://utaten.com/lyric/jb81008003/")
      .then(function ( response ) {
        // this.data = response.data;
      });
  },
});
</script>
