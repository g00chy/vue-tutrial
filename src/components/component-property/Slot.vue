<template>
  <div>
    <navigation-link url="/component-property">
      <template v-slot:link-string>Your Profile</template>
    </navigation-link>
    <navigation-link-2 url="/component-property">
      <template v-slot:link-string> Logged in as {{ username }} </template>
    </navigation-link-2>
    <navigation-link-3 url="/component-property" v-bind:user="username">
      <template v-slot:first="slotValue">
        Logged in as {{ slotValue.username }}
      </template>
      <template v-slot:second> Logged in as </template>
    </navigation-link-3>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationLink from "@/components/component-property/slot/NavigationLink.vue";
import NavigationLink2 from "@/components/component-property/slot/NavigationLink2.vue";
import NavigationLink3 from "@/components/component-property/slot/NavigationLink3.vue";

export default Vue.component("slot-vue", {
  components: { NavigationLink, NavigationLink2, NavigationLink3 },
  data: () => {
    return {
      username: "g00chy",
    };
  },
});
</script>
