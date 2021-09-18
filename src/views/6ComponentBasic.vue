<template>
  <div class="row">
    <div class="col-12">
      <a href="https://jp.vuejs.org/v2/guide/components.html" target="_blank"
        >component</a
      >
    </div>
    <div class="col-3">
      <component-1></component-1>
      <h3>component title</h3>
      <div id="components-demo">
        <component-1></component-1>
        <component-1></component-1>
        <component-1></component-1>
      </div>
      <h3>component title</h3>
      <div id="components-demo">
        <component-2></component-2>
        <component-2></component-2>
        <component-2></component-2>
      </div>
    </div>
    <div class="col-3">
      <h4>
        プロパティを使用した子コンポーネントへのデータの受け渡し・単一のルート要素
      </h4>
      <div id="blog-post">
        <div :style="{ fontSize: postFontSize + 'em' }">
          <blog-post
            v-for="post in posts"
            v-bind:key="post.id"
            v-bind:post="post"
            v-on:enlarge-text="onEnlargeText"
          ></blog-post>
        </div>
      </div>
    </div>
    <div class="col-3">
      <h4>component</h4>
      <input
        v-bind:value="searchText"
        v-on:input="searchText = $event.target.value"
      />
      <input v-model="searchText" />
      {{ searchText }}
      <custom-input v-model="searchText"></custom-input>
      <alert-box> Something bad happened. </alert-box>
      <dynamic-component></dynamic-component>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component1 from "@/components/component-basic/Component1.vue";
import Component2 from "@/components/component-basic/Component2.vue";
import CustomInput from "@/components/component-basic/CustomInput.vue";
import BlogPost from "@/components/component-basic/BlogPost.vue";
import AlertBox from "@/components/component-basic/AlertBox.vue";
import DynamicComponent from "@/components/component-basic/DynamicComponent.vue";

export default Vue.extend({
  name: "ComponentBasic",
  components: {
    Component1,
    Component2,
    BlogPost,
    CustomInput,
    AlertBox,
    DynamicComponent,
  },
  data: () => {
    return {
      postFontSize: 1,
      searchText: "",
      posts: [
        {
          id: 1,
          title: "My journey with Vue",
          content: "test",
          publishedAt: new Date(),
        },
        {
          id: 2,
          title: "2 titl2",
          content: "test",
          publishedAt: new Date(),
        },
        {
          id: 3,
          title: "3 title",
          content: "test",
          publishedAt: new Date(),
        },
      ],
    };
  },
  methods: {
    onEnlargeText: function (enlargeAmount: number) {
      this.postFontSize += enlargeAmount;
    },
  },
});
</script>
