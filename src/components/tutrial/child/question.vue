<template>
  <div>
    <p>as yes/no question:</p>
    <input v-model="question" />
    <p v-text="answer" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import _ from "lodash";
import axios from "axios";

export default Vue.extend({
  data() {
    return {
      question: "",
      answer: "I cannot give you an answer util you ask a question",
    };
  },
  watch: {
    question: function(): void {
      this.answer = "Waiting for you to stop typing...";
      this.debouncedGetAnswer();
    },
  },
  created(): void {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
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
        })
        .catch((error) => {
          this.answer = "error! could not reach the API.";
        });
    },
  },
});
</script>
