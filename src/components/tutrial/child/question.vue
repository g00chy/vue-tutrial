<template>
  <div>
    <p>as yes/no question:</p>
    <input v-model="question" />
    <p v-text="answer" />
    <img v-bind:src="imagehref" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import _ from "lodash";
import axios from "axios";
export type DataType = {
  question: string;
  answer: string;
  imagehref: string;
};

export default Vue.extend({
  data(): DataType {
    return {
      question: "",
      answer: "I cannot give you an answer util you ask a question",
      imagehref: "",
    };
  },
  watch: {
    question: function (): void {
      this.answer = "Waiting for you to stop typing...";
      this.imagehref = "";
      // ないと動かないけど、TypeScriptがエラー出してくるのでコメントアウト
      // this.debouncedGetAnswer();
    },
  },
  created(): void {
    // ないと動かないけど、TypeScriptがエラー出してくるのでコメントアウト
    // this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  },
  methods: {
    getAnswer(): void {
      if (this.question.indexOf("?") === -1) {
        this.answer = "Questions usually contain a quesion mark :-)";
        return;
      }
      this.answer = "Thinking....";
      axios
        .get("https://yesno.wtf/api")
        .then((response) => {
          this.answer = _.capitalize(response.data.answer);
          this.imagehref = _.capitalize(response.data.image);
        })
        .catch(() => {
          this.answer = "error! could not reach the API.";
        });
    },
  },
});
</script>
