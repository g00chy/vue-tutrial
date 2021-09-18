<template>
  <div class="row">
    <button
      v-for="tab in tabs"
      v-bind:key="tab"
      v-bind:class="['tab-button', { active: currentTab === tab }]"
      v-on:click="currentTab = tab"
    >
      {{ tab }}
    </button>
    <component v-bind:is="currentTabComponent" class="tab"></component>
  </div>
</template>

<style scoped>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>

<script lang="ts">
import Vue from "vue";
import HomeComponent from "@/components/component-basic/dynamic-component/homecomponent.vue";
import ArchiveComponent from "@/components/component-basic/dynamic-component/archivecomponent.vue";
import PostsComponent from "@/components/component-basic/dynamic-component/postscomponent.vue";

type DataType = {
  currentTab: string;
  tabs: Array<string>;
};

export default Vue.extend({
  components: {
    PostsComponent,
    ArchiveComponent,
    HomeComponent,
  },
  data: function (): DataType {
    return {
      currentTab: "Home",
      tabs: ["Home", "Posts", "Archive"],
    };
  },
  computed: {
    currentTabComponent: function () {
      // return "tab-home";
      return "tab-" + this.$data.currentTab.toLowerCase();
    },
  },
});
</script>
