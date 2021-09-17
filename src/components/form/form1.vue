<template>
  <div class="row">
    <div class="col-3">
      <textarea v-model="message" placeholder="add multiple lines"></textarea>
      <p>Message is: {{ message }}</p>
      <span>Multiline message is:</span>
      <p style="white-space: pre-line">{{ message }}</p>
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">{{ checked }}</label>
      <br />

      <h4>multiple cheked</h4>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike">Mike</label>
      <br />
      <span>Checked names: {{ checkedNames }}</span
      ><br />
      <span>Checked names: {{ checkedNamesCompute }}</span>

      <h4>Radio</h4>
      <input type="radio" id="one" value="One" v-model="picked" />
      <label for="one">One</label>
      <br />
      <input type="radio" id="two" value="Two" v-model="picked" />
      <label for="two">Two</label>
      <br />
      <span>Picked: {{ picked }}</span>

      <h4>select box</h4>
      <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ selected }}</span>

      <select v-model="multiselect" multiple>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <br />
      <span>Selected: {{ multiselect }}</span>
    </div>
    <div class="col-2">
      <h4>with v-for</h4>
      <select v-model="selected">
        <option
          v-for="(option, index) in options"
          v-bind:value="option.value"
          v-bind:key="index"
        >
          {{ option.text }}
        </option>
      </select>
      <span>Selected: {{ selected }}</span>

      <h4>bind</h4>
      <!-- チェックされたとき、`picked` は文字列"a"になります -->
      <input type="radio" v-model="picked" value="a" />
      <!-- `toggle` は true かまたは false のどちらかです -->
      <input type="checkbox" v-model="toggle" />
      <!-- 最初のオプションが選択されたとき、`selected` は文字列"abc"です -->
      <select v-model="selected">
        <option value="abc">ABC</option>
      </select>
      <br />
      <span>toggle: {{ picked }}</span
      ><br />
      <span>toggle: {{ toggle }}</span
      ><br />
      <span>toggle: {{ selected }}</span>
      <input
        type="checkbox"
        v-model="toggle"
        true-value="yes"
        false-value="no"
      />
      <input type="radio" v-model="pick" v-bind:value="a" />
      {{ pick }}<br />
      pickにaが代入される動きが気持ち悪い
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
type DataType = {
  message: string;
  checked: boolean;
  checkedNames: Array<string>;
  checkNamesCompute: string;
  picked: string;
  pick: string;
  a: string;
  toggle: boolean;
  selected: string;
  multiselect: Array<string>;
  options: Array<{ text: string; value: string }>;
};

export default Vue.extend({
  name: "event1",
  data(): DataType {
    return {
      message: "",
      checked: false,
      checkedNames: [],
      checkNamesCompute: "",
      picked: "",
      pick: "",
      a: "a",
      toggle: false,
      selected: "",
      multiselect: [],
      options: [
        { text: "A", value: "1" },
        { text: "B", value: "2" },
        { text: "C", value: "3" },
      ],
    };
  },
  computed: {
    checkedNamesCompute: function (): string {
      return this.checkedNames.join(",");
    },
  },
});
</script>
